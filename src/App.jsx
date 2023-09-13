
import { useEffect, useState } from "react"
import "./styles.css"
import { Form } from "./Form"
import { TodoList } from "./TodoList"


function App() {
  const [newItem, setNewItem] = useState("")
  const [toggleSubmit , setToggleSubmit]=useState(false)
  const [todo, setTodo] = useState(()=>{
    const localValue=localStorage.getItem("ITEMS")
    if(localValue===null) return []
    return JSON.parse(localValue)
  })
  function handleSubmit(e) {
    e.preventDefault()
    if(newItem==="") return
    setTodo(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title :newItem, completed : false}]
    })
    setNewItem("")
    setToggleSubmit(false)
    
  }
  useEffect(()=>{

    localStorage.setItem("ITEMS",JSON.stringify(todo))
  },[todo])
  function addTodo(title){
    
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
  function editTodo(id){
    let newEditTodo = todo.find((elem)=>{
      return elem.id === id
    })
    setNewItem(newEditTodo.title)
    deleteTodo(newEditTodo.id)
    setToggleSubmit(true)
  }
  
  return (
  <div className="card">
  <Form newItem={newItem} setNewItem ={setNewItem} handleSubmit={handleSubmit} toggleSubmit={toggleSubmit} setToggleSubmit={setToggleSubmit}/>
  <TodoList todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
  </div>)
}
export default App