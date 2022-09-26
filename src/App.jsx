import './App.css';
import { ConvertL2A, ConvertA2L } from './utils/transliteration';
import { useState } from 'react';


function App() {
  const [latinInput, setLatinInput] = useState('')
  const [arbicInput, setArabicInput] = useState('')

  const transliterateLatin = () => {
    if (!latinInput) return;
    console.log('🦄')
    setArabicInput(ConvertL2A(latinInput));
  }

  const transliterateArabic = () => {
    if (!arbicInput) return;
    console.log('🐮')
    setLatinInput(ConvertA2L(arbicInput));
  }

  const handleLatinInput = (e) => {
    setLatinInput(e.target.value)
  }

  const handleArabicInput = (e) => {
    setArabicInput(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Latin Uyghur to  Arabic Converter
        </p>
      </header>

      <div className="container">
        <button onClick={transliterateLatin}>Latin --> Arabic </button>
        <div className="text-area-container">
          <textarea className="text-input" type="textarea" rows="40" value={latinInput} onChange={handleLatinInput} />
          <textarea className="text-output" type="textarea" rows="18" value={arbicInput} onChange={handleArabicInput} />
        </div>
        <button onClick={transliterateArabic}>Latin {`<--`} Arabic </button>
      </div>
    </div>
  );
}

export default App;
