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
        <div>
            <input 
                type="checkbox" 
                checked={props.todo.done}
                onChange={props.switchDone}
                />
            {editMode && <input
             type="text"
             value={editText}
             onKeyUp={(e) => {
                 console.log("key up")
                 if (e.key === "Enter") {
                     console.log("enter up")
                    handleEditTodo({ title: e.target.value, done: props.todo.done, _id: props.todo._id })
                    setEditMode(false);
                 }
             }}
             onChange={(e) => setEditText(e.target.value)}/>}
            {!editMode && <span>{props.todo.title}</span>}
            {!editMode && <button onClick={() => startEdit()}>Edit</button>}
            {editMode && <button onClick ={() => cancelEdit()}>Cancel</button>}
            <button onClick={props.deleteTodo}>X</button>
        </div>
    )
}