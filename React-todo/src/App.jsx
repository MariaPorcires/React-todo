
import './App.css'
import { useState } from 'react'
import TodoItem from './components/TodoItem/TodoItem'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, todo: "Study", time: "11.00"},
    {id: 2, todo: "Clean house", time: "14.00"},
    {id: 3, todo: "Make dinner", time: "17.00"}
  ])

const todoComp = todos.map((todo) => {
  return <TodoItem todo={todo.todo} time={todo.time} key={todo.id} />
})

function addNewTodo(getTodo, getTime) {
  console.log(`${getTodo} ${getTime}`);

  const newTodo = {
    id: todos.length + 1,
    todo: getTodo,
    time: getTime
  }

  const tempTodoArray = [...todos];
  tempTodoArray.push(newTodo)

  setTodos(tempTodoArray)

}

  return (
    <div>
     { todoComp }
     <AddTodo addNewTodo= {addNewTodo}/>
   
    </div>
  )
}

export default App
