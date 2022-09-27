
import { useState } from 'react';
import './App.css';
import { calc } from './Calc'

function App() {

  return (
    <div className="body">
      <h1 className='title'>Calculator App</h1>
      <p className='sub-title'>By Zainal Shariff</p>
      <div className='calc-body'>
        <div className='result-display'>
          <input className='input-display'
            type='text'
            value='0'
            onChange={() => { }}
          />
          <p className='aggregate-display'>0</p>
        </div>
        <div className='button-container'>
          <button className='btn btn-1' onClick={() => calc(1)}>1</button>
          <button className='btn btn-2' onClick={() => calc(2)}>2</button>
          <button className='btn btn-3' onClick={() => calc(3)}>3</button>
          <button className='btn btn-clear' onClick={() => calc('clear')}>clr</button>
          <button className='btn btn-mul' onClick={() => calc('mul')}>x</button>
          <button className='btn btn-4' onClick={() => calc(4)}>4</button>
          <button className='btn btn-5' onClick={() => calc(5)}>5</button>
          <button className='btn btn-6' onClick={() => calc(6)}>6</button>
          <button className='btn btn-div' onClick={() => calc('div')}>/</button>
          <button className='btn btn-sub' onClick={() => calc('sub')}>-</button>
          <button className='btn btn-7' onClick={() => calc(7)}>7</button>
          <button className='btn btn-8' onClick={() => calc(8)}>8</button>
          <button className='btn btn-9' onClick={() => calc(9)}>9</button>
          <button className='btn btn-add' onClick={() => calc('add')}>+</button>
          <button className='btn btn-eq' onClick={() => calc('eq')}>=</button>
          <button className='btn btn-.' onClick={() => calc('.')}>.</button>
          <button className='btn btn-0' onClick={() => calc(10)}>0</button>
        </div>
      </div>
    </div>
  );
}

export default App;
