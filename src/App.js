import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;