
import { useState } from "react"
import "./styles.css"


export function Form(props){
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if(newItem==="") return
        props.addTodo(newItem)
        setNewItem("")
        
      }
    return(<form className="new-item-form"onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item" className="card-header">New item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button  className="btn">Add</button>
  </form>)
}
