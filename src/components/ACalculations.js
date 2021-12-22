import React from 'react'

const ACalculations = (props) => {
    const numbers = props.values;
    const arr = [];
    let l = 0;
    for (let i = 0; i < numbers.length; i++) {
        let nums = "";
        while (i < numbers.length && numbers[i] !== ' ') {
            nums += numbers[i];
            i++;
        }
        arr.push(Number(nums));
        l++;
    }
    
    for (let i = arr.length - 1; i < 30; i++) {
        arr.push(0);
    }
    let y = [];
    for (let i = 0; i < arr.length + arr.length - 1; i++) {
        y.push(0);
        for (let j = 0; j <= i; j++) {
            y[i] += arr[j] * arr[i - j];
        }
    }
    const endIndex = arr.length + arr.length - 1;
    console.log(endIndex);
    const lhg = y.slice(0, l + l - 1).map((item) => { return <li>{item}</li> });
    return (
        <div>
            {lhg}
        </div>
    )
}

export default ACalculations
