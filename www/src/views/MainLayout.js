

export const MainLayout = (props) => {

    return (
        <div className='main-layout lime lighten-5 col s12'>
            <h1 className="cyan-text text-accent-4">Layout title</h1>
            {props.children}
        </div>
    )
}