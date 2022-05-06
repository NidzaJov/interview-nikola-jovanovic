import { useState } from 'react';

export const TodoForm = (props) => {
    const [textValue, setTextValue] = useState('');
    const handleAddTodo = () => {
        props.addTodo(textValue);
        setTextValue('');
    }

    return (
        <div classname="col s12 amber darken-2 input-field">
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
            <button className="btn btn-large" type="submit" onClick={handleAddTodo}>
                Add items
                <i class="material-icons right">send</i>
            </button>

        </div>
    )
}