import React, {useState} from 'react';

export default function UserForm() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    return (
        <div>
            <h1>Handle Form in React</h1>
            <form onSubmit={(e) => { console.warn({name, tnc, interest}); e.preventDefault()}}>
                <input type="text" placeholder="enter your name here" onChange={(e) => setName(e.target.value)} />
                <br/><br/>
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Movies</option>    
                    <option>Marvel</option>
                    <option>DC</option>    
                    <option>Game of Thrones</option>        
                </select> <br/><br/>
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
                <span>Accept term and conditions</span>
                <br/>
                <br/>
                <button type="submit" >submit</button>
            </form>
        </div>
    )
}