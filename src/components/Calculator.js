const Calculator = () => (
    <div className="calculator">
      <div className="display">
        <span className="displayNumber">0</span>
      </div>
      <div className="keyboard">
        <button className="key" id="AC">AC</button>
        <button className="key " id="+/-">+/-</button>
        <button className="key" id="%">%</button>
        <button className="key orange-key" id="÷">÷</button>
        <button className="key" id="7">7</button>
        <button className="key" id="8">8</button>
        <button className="key" id="9">9</button>
        <button className="key orange-key" id="x">X</button>
        <button className="key" id="4">4</button>
        <button className="key" id="5">5</button>
        <button className="key" id="6">6</button>
        <button className="key orange-key" id="-">-</button>
        <button className="key big-key" id="0">0</button>
        <button className="key" id=".">.</button>
        <button className="key orange-key" id="=">=</button>
      </div>
    </div>
);

export default Calculator;