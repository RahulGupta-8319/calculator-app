import './App.css';
import Button from './components/Button';
import Input from './components/Input';
// import Calculator from './components/Calculator';
import React ,{useState} from 'react';
import * as math from 'mathjs'

function App() {
  const [text, setText] = useState("");
  const[result, setResult ] = useState('')
  const buttonColor = '#f2a33c'

  const addToText = (val) => {
    let t = [...text, val + ' ']
    console.log(t);
    setText( t )
    console.log( typeof text);
  }

  const resetInput = () =>{
    setText("")
    setResult("")
  }

  const calculateResult = () =>{
    let input = math.evaluate( text.join('') )
    setResult(input)
  }

  return (

    <div className="App">
      <div className='cal-wrapper'>
        <Input text={text} result={result} />

        {console.log(text)}
        <div className='row'>
        <Button symbol='7' handleClick={addToText}  />
        <Button symbol='8' handleClick={addToText}   />
        <Button symbol='9' handleClick={addToText}   />
        <Button symbol='/' handleClick={addToText}  color={buttonColor}  />
        </div>
        <div className='row'>
        <Button symbol='4' handleClick={addToText}   />
        <Button symbol='5' handleClick={addToText}   />
        <Button symbol='6' handleClick={addToText}   />
        <Button symbol='*' handleClick={addToText} color={buttonColor}  />
        </div>
        <div className='row'>
        <Button symbol='1' handleClick={addToText}   />
        <Button symbol='2' handleClick={addToText}   />
        <Button symbol='3' handleClick={addToText}   />
        <Button symbol='-' handleClick={addToText}  color={buttonColor}  />
        </div>
        <div className='row'>
        <Button symbol='0' handleClick={addToText}   />
        <Button symbol='.' handleClick={addToText}   />
        <Button symbol='=' result={result} handleClick={calculateResult} />
        <Button symbol='+' handleClick={addToText}  color={buttonColor}  />
        </div>
        <Button symbol='CLEAR' color='red' handleClick={resetInput}/>
      </div>
      {/* <Calculator /> */}
    </div>
    // <Calculator />
  );
}

export default App;
