import { MainLayout } from './MainLayout';

export const Todos = (props) => {

    return (
        <MainLayout>
           {props.children}
        </MainLayout>
    )
}