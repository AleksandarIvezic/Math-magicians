import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculator';

const Calculator = ({ start }) => {
  const [display, setDisplay] = useState({ next: start });
  const onClick = (e) => {
    setDisplay((display, calculate(display, e.target.textContent)));
  };

  const displayNum = display.next ? display.next : display.total || 0;

  return (
    <div className="calculator">
      <div className="display">
        <span className="displayNumber">{ displayNum }</span>
      </div>
      <div className="keyboard">
        <button onClick={onClick} type="button" className="key" id="AC">AC</button>
        <button onClick={onClick} type="button" className="key " id="+/-">+/-</button>
        <button onClick={onClick} type="button" className="key" id="%">%</button>
        <button onClick={onClick} type="button" className="key orange-key" id="÷">÷</button>
        <button onClick={onClick} type="button" className="key" id="7">7</button>
        <button onClick={onClick} type="button" className="key" id="8">8</button>
        <button onClick={onClick} type="button" className="key" id="9">9</button>
        <button onClick={onClick} type="button" className="key orange-key" id="x">x</button>
        <button onClick={onClick} type="button" className="key" id="4">4</button>
        <button onClick={onClick} type="button" className="key" id="5">5</button>
        <button onClick={onClick} type="button" className="key" id="6">6</button>
        <button onClick={onClick} type="button" className="key orange-key" id="-">-</button>
        <button onClick={onClick} type="button" className="key" id="1">1</button>
        <button onClick={onClick} type="button" className="key" id="2">2</button>
        <button onClick={onClick} type="button" className="key" id="3">3</button>
        <button onClick={onClick} type="button" className="key orange-key" id="+">+</button>
        <button onClick={onClick} type="button" className="key big-key" id="0">0</button>
        <button onClick={onClick} type="button" className="key" id=".">.</button>
        <button onClick={onClick} type="button" className="key orange-key" id="=">=</button>
      </div>
    </div>
  );
};

Calculator.propTypes = { start: PropTypes.number.isRequired };

export default Calculator;
