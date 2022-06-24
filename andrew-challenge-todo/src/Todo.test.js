import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Todo } from './Todo';
import React from "react";


test('renders the checkbox', () => {
    render(<Todo />);
    const linkElement = screen.getByTestId("custom-element")
    expect(linkElement).toBeInTheDocument();
});
test('renders the todo', () => {
    render(<Todo />);
    const linkElement2 = screen.getByTestId("custom-element-textbox")
    expect(linkElement2).toBeInTheDocument();
});

test('renders Todo with text "unload dishwasher" that is completed.', async () => {
    let props = {
        text: "unload dishwasher",
        complete: true
    }
    render(<Todo {...props} />)
    expect(await screen.findByText(/unload dishwasher/)).toBeInTheDocument();
    expect(await screen.getByRole('checkbox').checked).toBeTruthy();
});

test('renders Todo with text "load dishwasher" that is not completed.', async () => {
    let props = {
        text: "load dishwasher",
        complete: false
    }
    render(<Todo {...props} />)
    expect(await screen.findByText(/load dishwasher/)).toBeInTheDocument();
    expect(await screen.getByRole('checkbox').checked).toBeFalsy();
});
