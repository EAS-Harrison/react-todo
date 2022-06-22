import { render, screen } from '@testing-library/react';
import { Todos } from './Todos';
import React from "react";

test('renders the list of todos', () => {
    render(<Todos />);
    const linkElement = screen.getByRole()
    expect(linkElement).toBeInTheDocument();
});