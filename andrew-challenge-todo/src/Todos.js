import { Todo } from "./todo"
export const Todos = ({ todos, toggleTodo }) => {
    return (
        <div className="todos">
            {todos.map(todo => <Todo {...todo} toggleTodo={toggleTodo} />)}
        </div>
    )
}