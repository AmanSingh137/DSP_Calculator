import React from 'react'

const LCalculations = (props) => {
    const numbers = props.values;
    const arr = [];
    let k = 0, l = 0;
    for (let i = 0; i < numbers.length; i++) {
        let nums = "";
        while (i < numbers.length && numbers[i] !== ' ') {
            nums += numbers[i];
            i++;
        }
        arr.push(Number(nums));
        l++;
    }
    const numbers1 = props.values1;
    const arr1 = [];
    for (let i = 0; i < numbers1.length; i++) {
        let nums = "";
        while (i < numbers1.length && numbers1[i] !== ' ') {
            nums += numbers1[i];
            i++;
        }
        arr1.push(Number(nums));
        k++;
    }
    for (let i = arr.length - 1; i < 30; i++) {
        arr.push(0);
    }
    for (let i = arr1.length - 1; i < 30; i++) {
        arr1.push(0);
    }
    let y = [];
    for (let i = 0; i < arr.length + arr1.length - 1; i++) {
        y.push(0);
        for (let j = 0; j <= i; j++) {
            y[i] += arr[j] * arr1[i - j];
        }
    }
    const endIndex = arr.length + arr1.length - 1;
    console.log(endIndex);
    const lhg = y.slice(0, k + l - 1).map((item) => { return <li>{item}</li> });
    return (
        <div>
            {lhg}
        </div>
    )
}

export default LCalculations;
