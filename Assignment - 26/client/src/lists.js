import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { addItem, clearList, deleteItem } from './actions';
import axios from 'axios';

export default function Lists() {

    const [list, setList] = useState([])

    // const todoListItem = useSelector((state) => state.todolistReducer.list);
    const dispatch = useDispatch();

    async function getAllItems() {
        const res = await axios.get("http://localhost:8000/get")
        const todoList = res.data.item
        setList(
            todoList
        )
        // dispatch(addItem(item))
    }
    // console.log(todoListItem);

    const removeItem = async (id) => {
        await axios.delete("http://localhost:8000/remove/"+id)
        try {
            const newList = list.filter((key) => key._id !== id)
            setList(newList)
        } catch (error) {
            console.log(error);
        }
    }

    async function clearList() {
        await axios.delete("http://localhost:8000/clear")
        getAllItems()
    }

    return (
        <div className='container'>
            <center>
                <div className='todolist'>
                    <button onClick={getAllItems}>Check List</button>
                    <h3>YOUR ITEM'S</h3>
                    {
                        list.map((elem) => {
                            return (
                                <div key={elem._id} className='todos' >
                                    <li>{elem.item}
                                        <button onClick={() => removeItem(elem._id)}>DELETE</button>
                                    </li>
                                </div>

                            )
                        })
                    }
                </div>

                <button onClick={clearList}>CLEAR LIST</button>
            </center>
        </div>

    )
}
