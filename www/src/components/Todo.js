export const Todo = (props) => {
    return (
        <div>
            <input 
                type="checkbox" 
                checked={props.todo.done}
                onChange={props.switchDone}
                />
            <span>{props.todo.title}</span>
            <button onClick={props.deleteTodo}>X</button>
        </div>
    )
}