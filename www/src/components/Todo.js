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
        <div className="card horizontal lighten-3 valign-wrapper hoverable row">
            
           <div className="card-action col s2">
                <input 
                    className='filled-in'
                    type="checkbox" 
                    checked={props.todo.done}
                    onChange={props.switchDone}
                     />
            </div>
            <div className='card-content col s6'>
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
            </div>
            <div classname='col s4 card-action'>
                {!editMode && <button className="btn btn-small" onClick={() => startEdit()}>
                    Edit 
                    <i className="material-icons">edit</i>
                    </button>
                }
                {editMode && <button className="btn btn-small yellow lighten-1 black-text" onClick ={() => cancelEdit()}>Cancel</button>}
                <button className="btn btn-small red darken-1" onClick={props.deleteTodo}><i className="material-icons large">clear</i></button>
            </div>
            
        </div>
    )
}