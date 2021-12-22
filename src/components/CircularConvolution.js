import React, { useState } from 'react'
import CCalculations from './CCalculations';

const CircularConvolution = () => {
    const [val, setVal] = useState("");
    const [vals, setVals] = useState("");
    const [face, setFace] = useState(false);
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
    //let calculation="calc";
    return (
        <div className="App">
            <form>
                <label>Input Sequence</label>
                <input type="text" onChange={handleChange} />
                <br />
                <label>Impulse Sequence</label>
                <input type="text" onChange={handleChangeagain} />
                <br />
                <button type="button" onClick={changeApp}>Submit</button>
            </form>
            {face ? <CCalculations values={val} values1={vals} /> : null}
        </div>
    );
}

export default CircularConvolution;
