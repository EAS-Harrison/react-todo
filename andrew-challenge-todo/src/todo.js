export const Todo = ({ text, complete, toggleTodo, index }) => {
    return (
        <div className="todo">
            <p data-testid="custom-element-textbox">
                <input type="checkbox" checked={complete} onChange={() => toggleTodo(index)} data-testid="custom-element" />
                {text}
            </p>
        </div>
    )
}