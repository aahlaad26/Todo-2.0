
import { useState } from "react"
import "./styles.css"


export function Form({newItem,setNewItem,handleSubmit,toggleSubmit,setToggleSubimt}){
    

    return(<form className="new-item-form"onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item" className="card-header">New item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
    { toggleSubmit ?<button  className="btn">Edit</button>:<button  className="btn">Add</button>}
    
  </form>)
}
