import React, { useState } from 'react'
import ACalculations from './ACalculations';

const Auto = () => {
    const [val, setVal] = useState("");
    //const [vals, setVals] = useState("");
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
    // const handleChangeagain = (e) => {
    //     e.preventDefault();
    //     const target = e.target.value;
    //     setVals(target);
    // }
    //let calculation="calc";
    return (
        <div className="App">
            <form>
                <label>Input Sequence</label>
                <input type="text" onChange={handleChange} />
                <br />
                <button type="button" onClick={changeApp}>Submit</button>
            </form>
            {face ? <ACalculations values={val} /> : null}
        </div>
    );
}

export default Auto;
