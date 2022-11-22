import { useEffect, useState } from "react"

export default function State() {
    
    const [name, setName] = useState("")
    const [span, setSpan] = useState("")

    useEffect(() => {
        console.log(span)
    },[name,span])

    return (
    <div>
        <input 
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setSpan(name)}>submit</button>
        <span>{span}</span>
    </div>
  )
}
