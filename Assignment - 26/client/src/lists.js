import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, clearList, deleteItem } from './actions';
import axios from 'axios';

export default function Lists() {

    const [item, setItem] = useState([])

    const todoListItem = useSelector((state) => state.todolistReducer.list);
    const dispatch = useDispatch();

    async function getAllItems() {
        const res = await axios.get("http://localhost:8000/get")
        const todoList = res.data.item
        setItem(
            todoList
        )

        dispatch(addItem(item))

            
        
    }
    // console.log(todoListItem);

    return (
        <div className='container'>
            <center>
                <div className='todolist'>
                    <button onClick={getAllItems}>Check List</button>
                    <h3>YOUR ITEM'S</h3>
                    {
                        item.map((elem) => {
                            return (
                                <div key={elem.id} className='todos' >
                                    <li>{elem.item}
                                        {/* <button onClick={() => dispatch(deleteItem(elem.id))}>DELETE</button> */}
                                    </li>
                                </div>

                            )
                        })
                    }
                </div>

                {/* <button onClick={() => dispatch(clearList())}>CLEAR LIST</button> */}
            </center>
        </div>

    )
}
