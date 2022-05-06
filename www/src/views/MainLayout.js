

export const MainLayout = (props) => {

    return (
        <div className='row lime lighten-5'>
            <h1 className="cyan-text text-accent-4">Layout title</h1>
            {props.children}
        </div>
    )
}