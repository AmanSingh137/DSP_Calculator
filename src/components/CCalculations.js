import React from 'react'

const CCalculations = (props) => {
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
        //console.log(nums);
        arr1.push(Number(nums));
        k++;
    }
    console.log(k + ' ' + l);
    for (let i = arr.length - 1; i < 30; i++) {
        arr.push(0);
    }
    for (let i = arr1.length - 1; i < 30; i++) {
        arr1.push(0);
    }
    var x = Math.max(k, l);
    //console.log(x);
    var dp = new Array(x+1);
    for(let i = 0; i <= x; i++)
    {
        dp[i] = [];
    }
    var k1 = x;
    for(let i = 0; i <= x; i++)
    {
        for(let j = 0; j <= x; j++)
        {
            dp[j][i]=arr[(j+k1)%x];
        }
        k1--;
    }
    // for(let i = 0; i <= x; i++)
    // {
    //     for(let j = 0; j <= x; j++)
    //     {
    //         //console.log(dp[i][j] + ' ');
    //     }
    //     //console.log("\n");
    // }
    var y = [];
    for(let i = 0; i <= x; i++)
    {
        y.push(0);
        for(let j = 0; j <= x; j++)
        {
            y[i] += arr1[j]*dp[i][j];
        }
    }

    const clc = y.slice(0, x).map((item)=>{
        return <li>{item}</li>
    })
    return (
        <div>
            {clc}
        </div>
    )
}

export default CCalculations
