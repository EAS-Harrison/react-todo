import { render, screen } from '@testing-library/react';
import App from './App';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from "react";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders add button', () => {
  render(<App />);
  const linkElement = screen.getByRole('button', { name: /add/i })
  expect(linkElement).toBeInTheDocument();
});