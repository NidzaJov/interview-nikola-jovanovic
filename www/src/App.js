import './App.css';
import { useState, useEffect } from 'react';
import  todosService from './services/todosService';
import { Todo } from './components/Todo'
import { TodoForm } from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    let data = await todosService.getAllTodos();
    setTodos(data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const mappedTodos = todos.map((todo, idx) => (
    <Todo 
    key={idx}
    todo={todo}
    deleteTodo = {() => removeTodo(todo)}
    switchDone = {() => toggleTodo(todo)}
    />
  ))

  const removeTodo = (todoToRemove) => {
    let todoId = todoToRemove._id.toString();
    const newArray = todos.filter((todo) => todo._id !== todoId);
    setTodos([...newArray]);
    (async (todoId) => {
      await todosService.deleteTodo(todoId);
    }) (todoId);
  }

  const createTodo = (newTodotext) => {
    (async (newTodoText) => {
      let todoObject = {
        title: newTodoText,
        done: false
      }
      await todosService.createTodo(todoObject);
    }) (newTodotext);

    fetchTodos();
  }

  const toggleTodo = (todoToToggle) => {
    const payload = {
      value: !todoToToggle.done,
      field: 'done',
      _id: todoToToggle._id
    };
    (async (payload) => await todosService.patchTodo(payload)) (payload);

    fetchTodos();
  }

  return (
    <div className="App">
      <TodoForm addTodo={todoText => createTodo(todoText)}/>
      {mappedTodos}
    </div>
  );
}

export default App;
