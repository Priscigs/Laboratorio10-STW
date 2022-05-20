import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import StartApp from '../StartApp';

test('Test Equal Component', () => {
  render(<StartApp />);
  const testElement = screen.getByTestId('equal-test');
  const equalBtn = screen.getByText('🟰');
  userEvent.click(equalBtn);

  expect(testElement).toBeInTheDocument();
  expect(equalBtn).toHaveTextContent('🟰');
});
