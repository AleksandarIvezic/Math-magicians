import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.result;
    return (
      <div className="App">
        <Calculator state={result} />
      </div>
    );
  }
}

export default App;
