import "./Main.css";
import React, { useState, useEffect } from "react";
import Test from "../Test/Test";
import codeSnips from "../../CodeSnips/CodeSnips";

export default function Main() {
  const [textInput, setTextInput] = useState("");
  const [codeSnip, setCodeSnip] = useState(
    codeSnips.snippets[Math.floor(Math.random() * codeSnips.snippets.length)]
  );
  const [textColor, setTextColor] = useState("");

  const randomSnip =
    codeSnips.snippets[Math.floor(Math.random() * codeSnips.snippets.length)];

  useEffect(() => {
    for (let i = 0; i < codeSnip.length; i++) {
      if (
        textInput.charAt(textInput.length - 1) !==
        codeSnip.charAt(textInput.length - 1)
      ) {
        return setTextColor("red");
      } else {
        return setTextColor("white");
      }
    }
  }, [codeSnip, textInput]);

  const handleOnChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      setTextInput(textInput + "      ");
    }
  };

  const handleRestartButton = () => {
    setTextInput("");
  };

  const handleRandomizeButton = () => {
    setTextInput("");
    setCodeSnip(randomSnip);
  };

  return (
    <div>
      <Test />
      <div className="parent">
        <pre style={{ color: textColor }} className="__code">
          {codeSnip}
        </pre>
      </div>
      <div>
        <form>
          <textarea
            type="text"
            onChange={handleOnChange}
            id="__text"
            onKeyDown={handleKeyDown}
            value={textInput}
          />
        </form>
        <div className="__buttons">
          <button onClick={handleRestartButton} className="__restart">
            Restart
          </button>
          <button onClick={handleRandomizeButton} className="__randomize">
            Randomize
          </button>
        </div>
      </div>
    </div>
  );
}
