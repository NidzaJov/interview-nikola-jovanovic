import { useState } from 'react';

export const TodoForm = (props) => {
    const [textValue, setTextValue] = useState('');
    const handleAddTodo = () => {
        props.addTodo(textValue);
        setTextValue('');
    }

    return (
        <div>
            <label>
                Title
                <input
                 type="text"
                 value={textValue}
                 onChange={e => setTextValue(e.target.value)}
                 onKeyUp={e => {
                     if (e.key === 'Enter') {
                         handleAddTodo();
                     }
                 }}
                 ></input>
            </label>
            <button onClick={handleAddTodo}>Add items</button>

        </div>
    )
}