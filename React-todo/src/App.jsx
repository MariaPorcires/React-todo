
import './App.css'
import { useState } from 'react'
import TodoItem from './components/TodoItem/TodoItem'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, todo: "Study", time: "11.00"},
    {id: 2, todo: "Clean house", time: "14.00"},
    {id: 3, todo: "Make dinner", time: "17.00"}
  ])

const todoComp = todos.map((todo) => {
  return <TodoItem todo={todo.todo} time={todo.time} key={todo.id} />
})


  return (
    <div>
     { todoComp }
    </div>
  )
}

export default App


/*lista
loopa ut lista, 
skicka med props,
visa lista*/