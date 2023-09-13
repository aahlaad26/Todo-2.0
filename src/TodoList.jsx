import { TodoItem } from "./TodoItem"

export function TodoList({ todo, deleteTodo ,toggleTodo ,editTodo}) {

    return (
        <><h1 className="header">Todo-list</h1>
            {todo.length === 0 && "No Todos"}
            <ul className="list">
                {todo.map(currentTodos => {
                    return (
                        <TodoItem title={currentTodos.title} 
                        id={currentTodos.id} 
                        key={currentTodos.id} 
                        deleteTodo={deleteTodo} 
                        completed={currentTodos.completed}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                        />
                    )
                })}



            </ul></>)
}