import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_todo } from '../redux/actions';

function TodoInput() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(event) {
        if (text !== "") {
            dispatch(add_todo(text));
            setText("");
        }
        event.preventDefault();
    }

    return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book" />
                        </div>
                    </div>
                    <input
                        type="text"
                        className="form-control text-capitalize"
                        placeholder="Add your name"
                        name="name"
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                </div>
                <button
                    className="btn btn-block btn-primary mt-3"
                    onClick={handleSubmit}
                >
                    ADD
                </button>
            </form>
        </div>
    )
}

export default TodoInput;