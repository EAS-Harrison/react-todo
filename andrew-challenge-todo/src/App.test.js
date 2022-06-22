import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

test('renders add button', () => {
  render(<App />);
  const linkElement = screen.getByRole('button', { name: /add/i })
  expect(linkElement).toBeInTheDocument();
});