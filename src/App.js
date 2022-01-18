import React, { useState } from 'react';
import './App.css';
import Calculations from './components/Calculations';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  const [val, setVal] = useState("");
  const [vals, setVals] = useState("");
  const [face, setFace] = useState(false);
  const [count, setCount]= useState(0);
  const handleChange = (e) => {
    e.preventDefault();
    const target = e.target.value;
    setVal(target);
  }
  //let calculation="calc";
  const changeApp = () => {
    setFace(true);
  }
  const handleChangeagain = (e) => {
    e.preventDefault();
    const target = e.target.value;
    setVals(target);
  }

  const eventHandler = (e) => {
    e.preventDefault();
    setCount(0);
}

const eventsHandler = (e) => {
    e.preventDefault();
    setCount(1);
}

  //let calculation="calc";
  return (
    <div>
    <Link to="/">
        <h1 className='title1'>CROSS CONVOLUTION</h1>
    </Link>
    <div className='heading'>
        <div>
            <form>
                <div className='formCard'>
                    <div className='label1'>
                        <label>Input Sequence, x(n): </label>
                        <input type="text" onChange={handleChange} />
                    </div>
                    <br />
                    <div className='label1'>
                        <label>Impulse Sequence, h(n): </label>
                        <input type="text" onChange={handleChangeagain} />
                    </div>
                    <br />
                </div>
                <div className='submit'>
                    <Button type="button"  class="btn" onClick={changeApp}>Submit</Button>
                </div>
            </form>
            <div className='output'>
                <h4 className='out'>OUTPUT SEQUENCE, y(n): </h4>
                {face ? <Calculations values={val} values1={vals} /> : null}
            </div>
        </div>
        
        <div className='impor'>
        <div className='changeimp'>
            <Button className='help' onClick={(e) => eventHandler(e)}>About</Button>
            <Button className='help' onClick={(e) => eventsHandler(e)}>Help</Button>  
        </div>
        {count === 1?
        <div className='impPoints'>
            <h3 className='points'>IMPORTANT POINTS:</h3>
            <ul>
                <li>
                    In the following input fields, please provide space-separated integers.
                </li>
                <li>
                    Input Sequence is x(n).
                </li>
                <li>
                    Impulse Sequence is h(n).
                </li>
                <li>
                    Output Sequence is y(n).
                </li>
                <li>
                    Please constrain your input to 30 values.
                </li>
                <li>
                    Please refrain from submitting empty sequences. 
                </li>
            </ul>
        </div> : 
        <div className="impPoints">
            <p className='intro-about'>
            The DSP Calculator lets you calculate various DSP sequences online — for free!
            </p>
            <p className='intro-about1'>
            Our calculator allows you to check your solutions to various DSP Sequences. It helps you practice by showing you the correct result of the given sequence.
            <br /> For more about how to use the DSP Calculator, go to "Help".
            <br />And now: Happy calculating!
            </p>
        </div>
        }
    </div>
    </div>
</div>
  );
}

export default App;
