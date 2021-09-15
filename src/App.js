import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: 0,
    };
  }

  render() {
    const start = this.state.startValue;
    return (
      <div className="App">
        <Calculator start={start} />
      </div>
    );
  }
}

export default App;
