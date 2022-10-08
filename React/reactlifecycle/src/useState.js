import { useState } from "react"

export default function State() {

    const [value, setValue] = useState();

    function OnClickChange(event) {
        const newSpan = event.target.value;
        setValue(newSpan)
    }

    return (
        <div>
            <input type="text" placeholder="Enter Your Name Here" onChange={OnClickChange}/>
            <span>{value}</span>
        </div>
    )
}
