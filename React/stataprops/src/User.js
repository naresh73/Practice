import React, {useState} from 'react';


function User() {
    const [value, setValue] = useState(0);

    function handleChange() {
      setValue(value + 1) 
    }
    console.log("->>>>>>>>>>>>>>>>>>>>")
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleChange}>click me</button>
        </div>
    )
} 

export default User;