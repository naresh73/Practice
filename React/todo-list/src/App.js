import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, clearList, deleteItem } from './actions';

export default function App() {

  const [item, setItem] = useState("")

  function handleChange(e) {
    setItem(e.target.value)
  }

  const todoList = useSelector((state) => state.todolistReducer.list);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <center>
        <h1>TODO LIST</h1>
        <div className='input-field'>
          <input
            className='input'
            name="item"
            placeholder='enter item'
            value={item}
            onChange={handleChange}
          />
          <button onClick={() => dispatch(addItem(item), setItem(''))} >ADD</button>
        </div>

        
          <div className='todolist'>
            <h3>YOUR ITEM'S</h3>
            {
              todoList.map((elem) => {
                return (
                  <div key={elem.id} className='todos' >
                    <li>{elem.data}
                      <button onClick={() => dispatch(deleteItem(elem.id))}>DELETE</button>
                    </li>
                  </div>

                )
              })
            }
          </div>
        
        <button onClick={() => dispatch(clearList())}>CLEAR LIST</button>
      </center>
    </div>
  )
}
