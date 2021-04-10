import './Main.css';
import React, { useState, useEffect } from 'react';
import codeSnips from '../../CodeSnips/CodeSnips';

export default function Main() {
  const [textInput, setTextInput] = useState('');
  const [codeSnip, setCodeSnip] = useState(
    codeSnips.snippets[Math.floor(Math.random() * codeSnips.snippets.length)]
  );
  const [textColor, setTextColor] = useState('');

  const newSnip = codeSnips.snippets[0];
  const randomSnip =
    codeSnips.snippets[Math.floor(Math.random() * codeSnips.snippets.length)];

  useEffect(() => {
    setCodeSnip(codeSnip);

    for (let i = 0; i < codeSnip.length; i++) {
      if (
        textInput.charAt(textInput.length - 1) !==
        codeSnip.charAt(textInput.length - 1)
      ) {
        return setTextColor('red');
      } else {
        return setTextColor('white');
      }
    }
  }, [codeSnip, textInput, newSnip]);

  const handleOnChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      setTextInput(textInput + '      ');
    }
  };

  const handleRestartButton = (e) => {
    setTextInput('');
  };

  const handleRandomizeButton = (e) => {
    setTextInput('');
    setCodeSnip(randomSnip);
  };

  return (
    <div>
      <div className='parent'>
        <pre style={{ color: textColor }} className='__code'>
          {codeSnip}
        </pre>
      </div>
      <div>
        <form>
          <label className='label' htmlfor='typing_box'>
            type box below
          </label>
          <textarea
            name='typing_box'
            onChange={handleOnChange}
            id='__text'
            onKeyDown={handleKeyDown}
            value={textInput}
          />
        </form>
        <div className='__buttons'>
          <button onClick={handleRestartButton} className='__restart'>
            Restart
          </button>
          <button onClick={handleRandomizeButton} className='__randomize'>
            Randomize
          </button>
        </div>
      </div>
    </div>
  );
}
