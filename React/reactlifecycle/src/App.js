// import { useEffect, useState  } from 'react'
import './App.css';
import TimeOut from './useEffect';
import State from './useState';

// function App() {
  
//   const [val, setVal] = useState(0);
//   const [isclicked, setIsclicked] = useState(false);

//   useEffect(() => {
//     console.log("componentDidMount");
// }, [])



// useEffect(()=>{
//   console.log("componentDidUpdate")
//   return (
//     () => {
//      console.log("component will unmount")
//     }  
//    )
// },[isclicked,val])
// function handleInc() {
//   setVal(val + 1)
// }

// function handleDec() {
//   setVal(val - 1)
// }

// function handleReset() {
//   setVal(0)
// }

// function handleResetButton() {
//   setIsclicked(true)
// }


//   return (
//     <div className="App">
//       <h1>{val}</h1>
//       <button onClick={handleInc}>INC</button>
//       <button onClick={handleDec}>DEC</button>
//       {
//         !isclicked ? 
//       <button onClick={handleReset}>RESET</button> : 
//       null
//     }
//       <button onClick={handleResetButton}>Delete RESET</button>

//     </div>
//   );
// }

function App() {
  return (
    <div>
    <TimeOut />
    <State />
    </div>
  )
}

export default App;
