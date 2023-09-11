
import { useEffect, useState } from "react"
import "./styles.css"
import { Form } from "./Form"
import { TodoList } from "./TodoList"


function App() {
  
  const [todo, setTodo] = useState(()=>{
    const localValue=localStorage.getItem("ITEMS")
    if(localValue===null) return []
    return JSON.parse(localValue)
  })

  useEffect(()=>{

    localStorage.setItem("ITEMS",JSON.stringify(todo))
  },[todo])
  function addTodo(title){
    setTodo(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed : false}]
    })
  }
  function toggleTodo(id, completed){
    setTodo(currentTodos=>{
      return currentTodos.map(to=>{
        if(to.id===id)return{...to, completed}
        return to
      }
      )
    })
    console.log(todo)
  }


  function deleteTodo(id){
    setTodo(currentTodos=>{
      return currentTodos.filter(e =>e.id!==id)
  })}
  
  return (
  <div className="card">
  <Form addTodo={addTodo} todo={todo}/>
  <TodoList todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
  </div>)
}
export default App