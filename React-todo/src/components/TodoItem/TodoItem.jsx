function TodoItem(props) {
    return(
        <>
        <h2>{props.todo}</h2>
        <h3>{props.time}</h3>
        </>
    )
}

export default TodoItem