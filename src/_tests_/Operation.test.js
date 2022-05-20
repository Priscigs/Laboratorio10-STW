import { render, screen } from '@testing-library/react';
import React from 'react';
import StartApp from '../StartApp';

test('Test Plus Operation Component', () => {
  render(<StartApp operand="+" />);
  const testElement = screen.getByTestId('plus-test');
  expect(testElement).toBeInTheDocument();
});

test('Test Minus Operation Component', () => {
  render(<StartApp operand="-" />);
  const testElement = screen.getByTestId('minus-test');
  expect(testElement).toBeInTheDocument();
});

test('Test Multiply Operation Component', () => {
  render(<StartApp operand="*" />);
  const testElement = screen.getByTestId('multiply-test');
  expect(testElement).toBeInTheDocument();
});

test('Test Div Operation Component', () => {
  render(<StartApp operand="/" />);
  const testElement = screen.getByTestId('div-test');
  expect(testElement).toBeInTheDocument();
});
