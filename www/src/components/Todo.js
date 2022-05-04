import { useState } from 'react';

export const Todo = (props) => {
    const [ editMode, setEditMode ] = useState(false);
    const [ editText, setEditText ] = useState(props.todo.title);

    const startEdit = () => {
        setEditMode(true);
    };

    const cancelEdit = () => {
        setEditText(props.todo.title)
        setEditMode(false);
    }

    const handleEditTodo = (todo) => {
        props.editTodoCallback(todo)
    }


    return (
        <div className="todo row brown lighten-3 valign-wrapper hoverable">
            <input 
                className="s2"
                type="checkbox" 
                checked={props.todo.done}
                onChange={props.switchDone}
                />
            {editMode && <input
                className="col s3"
                type="text"
                value={editText}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        handleEditTodo({ title: e.target.value, done: props.todo.done, _id: props.todo._id })
                        setEditMode(false);
                    }
                }
            }
             onChange={(e) => setEditText(e.target.value)}/>}
            {!editMode && <span className="col s3 left-align truncate">{props.todo.title}</span>}
            {!editMode && <button className="col s1" onClick={() => startEdit()}>Edit</button>}
            {editMode && <button className="col s1" onClick ={() => cancelEdit()}>Cancel</button>}
            <button className="col s1" onClick={props.deleteTodo}>X</button>
        </div>
    )
}