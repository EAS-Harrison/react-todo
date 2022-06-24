import { render, screen } from '@testing-library/react';
import { Todos } from './todos';
import React from "react";

test('Rendering Todos component and the text "test" is presnt', () => {

    let todos = [{ text: "test", toggleTodo: () => { } }]
    render(<Todos todos={todos} />)
    expect(screen.getByText(/test/)).toBeInTheDocument();
});

test('Rendering Todos component and the text "test" is present', () => {
    let toggle = jest.fn()
    let todos = [{ text: "test" }, { text: "test" }, { text: "bob" }]
    render(<Todos todos={todos} toggleTodo={toggle} />)
    expect(screen.getAllByText(/test/)).toHaveLength(2);
    expect(screen.getByText(/bob/)).toBeInTheDocument();
});

