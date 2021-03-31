import React, { Component, createContext } from 'react';

export const textInput = {
  text: '',
};

const ConsoleContext = createContext({
  textInput: textInput,
});

export default ConsoleContext;

export class ConsoleProvider extends Component {
  state = {
    text: '',
  };

  setText = (textInput) => {
    this.setState({ textInput });
  };

  render() {
    const value = {
      textInput: this.state.textInput,
      setText: this.setText,
    };
    return (
      <ConsoleContext.Provider value={value}>
        {this.props.children}
      </ConsoleContext.Provider>
    );
  }
}
