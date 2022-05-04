import { useState } from 'react';

export const TodoForm = (props) => {
    const [textValue, setTextValue] = useState('');
    const handleAddTodo = () => {
        props.addTodo(textValue);
        setTextValue('');
    }

    return (
        <div classname="todo-form section amber darken-2 input-field">
            <label className="row">
                <i className="material-icons prefix col s1">mode_edit</i>
                <input 
                classname="col s4"
                type="text" 
                value={textValue} 
                onChange={e => setTextValue(e.target.value)} 
                onKeyUp={e => { if (e.key ==='Enter') {
                        handleAddTodo();
                    }
                 }}
                ></input>
            </label>
            <button onClick={handleAddTodo}>Add items</button>

        </div>
    )
}