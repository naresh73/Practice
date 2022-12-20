import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './redux2/actions';


function App2() {
  const value = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch()
  return (
    <div>
        {value}
        <div>
          <button 
          onClick={() => dispatch(incNumber(1000))}
          >INC</button>
        </div>
        <div>
          <button
          onClick={() => dispatch(decNumber(1000))}
          >DEC</button>
        </div>
    </div>
  )
}

export default App2;