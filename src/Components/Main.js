import './Main.css';
import React, { useState, useEffect } from 'react';

export default function Main() {
  const [textInput, setTextInput] = useState('');
  const [codeSnip, setCodeSnip] = useState('');

  useEffect(() => {
    setCodeSnip(
      `const serializeResource = (resource) => ({
      id: resource.id,
      title: xss(resource.title),
      content: xss(resource.content),
      zipcode: resource.zipcode,
      date_published: resource.date_published,
    });`
    );

    for (let i = 0; i < codeSnip.length; i++) {
      if (
        textInput.charAt(textInput.length - 1) !==
        codeSnip.charAt(textInput.length - 1)
      ) {
        console.log(textInput.charAt(textInput.length - 1), 'incorrect');
        return textInput.charAt(textInput.length - 1);
      } else {
        console.log(textInput.charAt(textInput.length - 1), 'correct');
        return textInput.charAt(textInput.length - 1);
      }
    }
  }, [codeSnip, textInput]);

  const handleOnChange = (e) => {
    setTextInput(e.target.value);
    console.log(textInput);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      setTextInput(textInput + '      ');
      console.log(textInput);
    }
  };

  return (
    <div>
      <div className='parent'>
        <pre className='__code'>{codeSnip}</pre>
      </div>
      <div>
        <form>
          <textarea
            type='text'
            onChange={handleOnChange}
            id='__text'
            onKeyDown={handleKeyDown}
            value={textInput}
          />
        </form>
      </div>
    </div>
  );
}
