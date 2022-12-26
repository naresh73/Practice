import React, { useEffect, useState } from 'react';
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { addItem, clearList, deleteItem } from './actions';
import axios from 'axios';
import Lists from './lists';

export default function App() {
  const [item, setItem] = useState("")
  function handleChange(e) {
    setItem(e.target.value)
  }

  // const todoList = useSelector((state) => state.todolistReducer.list);
  // const dispatch = useDispatch();

  async function addItemIntoTodo() {  
    await axios.post("http://localhost:8000/add", {item})
    .then((res) => {
      alert(res.data.message)
      setItem('')
    })
  }
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
        </div>
        <br />
        <br />
          <button onClick={addItemIntoTodo} >ADD</button>


        {/* <div className='todolist'>
          <h3>YOUR ITEM'S</h3>
          {
            todoList.map((elem) => {
              return (
                <div key={elem.id} className='todos' >
                  <li>{elem.item}
                    <button onClick={() => dispatch(deleteItem(elem.id))}>DELETE</button>
                  </li>
                </div>

              )
            })
          }
        </div> */}

        {/* <button onClick={() => dispatch(clearList())}>CLEAR LIST</button> */}
      </center>
      <Lists />
    </div>
  )
}
