import { Todo } from "./todo"
export const Todos = ({ todos, toggleTodo }) => {
    return (
        <p className="todos">
            {todos.map(todo => <Todo {...todo} toggleTodo={toggleTodo} />)}
        </p>
    )
}