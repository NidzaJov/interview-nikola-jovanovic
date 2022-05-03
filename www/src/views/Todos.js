import { TodoForm } from'../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { MainLayout } from './MainLayout';

export const Todos = () => {

    return (
        <MainLayout>
            <TodoForm />
            <TodoList></TodoList>
        </MainLayout>
    )
}