import React from "react";
import TodoItem from "./todo.modify";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../redux/actions/index";

const TodoList = () => {
  const { list } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  return (
    <div>
      <ul className="list-group my-5 border border-light">
        <h3 className="text-capitalize text-center">JAYESH Todo list</h3>
        {list.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={handleClearList}
      >
        Clear List
      </button>
    </div>
  );
};

export default TodoList;