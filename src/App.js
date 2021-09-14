import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 0,
    };
  }

  render() {
    const { state } = this.state;
    return (
      <div className="App">
        <Calculator state={state} />
      </div>
    );
  }
}

export default App;
