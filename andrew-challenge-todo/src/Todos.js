import { Todo } from "./todo"
export const Todos = ({ todos, toggleTodo }) => {
    return (
        <p className="todos">
            {todos.map((todo, index) => <Todo {...todo} toggleTodo={toggleTodo} index={index} />)}
        </p>
    )
}