export const Todo = ({ text, complete, toggleTodo }) => {
    return (
        <div className="todo">
            <p>
                <input type="checkbox" onClick={complete = true} onChange={toggleTodo} />
                {text}
            </p>
        </div>
    )
}