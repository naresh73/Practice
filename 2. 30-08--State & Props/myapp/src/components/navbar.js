import * as React  from 'react';

export default function Nav({ title, subtitle, description }) {
   const [state,setState] = React.useState(0)
   

   const handle = ()=>{

    setState(state+1)
   }




    return (
        <div className='container'>
            <center>
                <h1>{state}</h1>
                <button onClick={handle} >increase</button>
                <div className='des'>
                    {/* <h3>{props.description}</h3> */}
                </div>
            </center>
        </div>
    )
}