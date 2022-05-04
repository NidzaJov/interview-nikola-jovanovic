import './App.css';
import { useState, useEffect } from 'react';
import  todosService from './services/todosService';
import { Todo } from './components/Todo'
import { TodoForm } from './components/TodoForm';
import { Todos } from './views/Todos';
import { TodoList } from './components/TodoList'


function App() {
  const [todos, setTodos] = useState([]);
  
  const fetchTodos = async () => {
    let data = await todosService.getAllTodos();
    setTodos(data);
  }

  const editTodo = (todo) => {
    (async (todo) => {
      await todosService.editTodo(todo)
    }) (todo);
    fetchTodos();
  }

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

  useEffect(() => {
    fetchTodos();
  }, []);

  const mappedTodos = todos.map((todo, idx) => (
    <Todo 
    key={idx}
    todo={todo}
    editTodoCallback = {editTodo}
    deleteTodo = {() => removeTodo(todo)}
    switchDone = {() => toggleTodo(todo)}
    />
  ))

  return (
    <div className="App row blue lighten-5">
      <Todos>
        <TodoForm addTodo={todoText => createTodo(todoText)}/>
        <TodoList>
          {mappedTodos}
        </TodoList>
        
      </Todos>
      
    </div>
  );
}

export default App;
