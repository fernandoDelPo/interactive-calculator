import './assets/stylesheets/App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = value =>{
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('No values entered');
    }
  };

  return (
    <div className='App'>
      <div className='title-container'>
        <h1 className='title'>Interactive Calculator</h1>
      </div>
      <div className='main-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button assignClick={addInput}>7</Button>
          <Button assignClick={addInput}>8</Button>
          <Button assignClick={addInput}>9</Button>
          <Button assignClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button assignClick={addInput}>4</Button>
          <Button assignClick={addInput}>5</Button>
          <Button assignClick={addInput}>6</Button>
          <Button assignClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button assignClick={addInput}>1</Button>
          <Button assignClick={addInput}>2</Button>
          <Button assignClick={addInput}>3</Button>
          <Button assignClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button assignClick={calculateResult}>=</Button>
          <Button assignClick={addInput}>0</Button>
          <Button assignClick={addInput}>.</Button>
          <Button assignClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton assignClear={() => setInput('')} />
        </div>
      </div>
    
      
    </div>
  );
}

export default App;
