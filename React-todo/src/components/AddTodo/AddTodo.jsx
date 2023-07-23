function AddTodo(props) {
    let todo= '';
    let time= '';


    function getTodo(event) {
        todo = event.target.value
        console.log(todo);
    }

    function getTime(event) {
        time = event.target.value
        console.log(time);
    }

    function handleClick() {
        props.addNewTodo(todo, time)
    }

    return(
        <>
            <input type="text" onChange={getTodo}></input>
            <input type="time" onChange={getTime}></input>
            <button className='btn' onClick={handleClick}>Add todo</button>
        </>
    )
}

export default AddTodo
