import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculating= this.calculating.bind(this);
    this.state = {   
      total: props.start,
      next: null,
      operation: null,      
    };
  }

  calculating(button) {
    console.log('click on' + button)
    this.setState((state) => {
      return  calculate(state, button);
    })
    console.log(this.state);
  }

  render() {
    const displayNum = this.state.next ? this.state.next : this.state.total || 0;
    console.log(displayNum);
    return (
      <div className="calculator">
        <div className="display">
          <span className="displayNumber">{ displayNum }</span>
        </div>
        <div className="keyboard">
          <button onClick={() => this.calculating("AC")} type="button" className="key" id="AC">AC</button>
          <button onClick={() => this.calculating("+/-")} type="button" className="key " id="+/-">+/-</button>
          <button onClick={() => this.calculating("%")} type="button" className="key" id="%">%</button>
          <button onClick={() => this.calculating("÷")} type="button" className="key orange-key" id="÷">÷</button>
          <button onClick={() => this.calculating("7")} type="button" className="key" id="7">7</button>
          <button onClick={() => this.calculating("8")} type="button" className="key" id="8">8</button>
          <button onClick={() => this.calculating("9")} type="button" className="key" id="9">9</button>
          <button onClick={() => this.calculating("X")} type="button" className="key orange-key" id="X">X</button>
          <button onClick={() => this.calculating("4")} type="button" className="key" id="4">4</button>
          <button onClick={() => this.calculating("5")} type="button" className="key" id="5">5</button>
          <button onClick={() => this.calculating("6")} type="button" className="key" id="6">6</button>
          <button onClick={() => this.calculating("-")} type="button" className="key orange-key" id="-">-</button>
          <button onClick={() => this.calculating("1")} type="button" className="key" id="1">1</button>
          <button onClick={() => this.calculating("2")} type="button" className="key" id="2">2</button>
          <button onClick={() => this.calculating("3")} type="button" className="key" id="3">3</button>
          <button onClick={() => this.calculating("+")} type="button" className="key orange-key" id="+">+</button>
          <button onClick={() => this.calculating("0")} type="button" className="key big-key" id="0">0</button>
          <button onClick={() => this.calculating(".")} type="button" className="key" id=".">.</button>
          <button onClick={() => this.calculating("=")} type="button" className="key orange-key" id="=">=</button>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = { start: PropTypes.number.isRequired };

export default Calculator;
