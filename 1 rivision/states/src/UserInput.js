import React, { useState } from 'react';

export default function UserInput() {
    
    const [value, setValue] = useState("")
    const [result, setResult] = useState(false)

    function onChange(val) {
        console.log(val.target.value);
        setValue(val.target.value)
        setResult(false)
    }

    function showResult() {
        setResult(true)
    }
    
    return (
        <div>
            <h1>input</h1>
            <input type="text" onChange={onChange} />
            <button onClick={showResult}>RESULT</button>
            {
                result ? <h1>{value}</h1> : null
            }
        </div>
    )
}