import { getByPlaceholderText, getByRole, render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
// //   const linkElement = screen.getByText(//i);
// //   expect(linkElement).toBeInTheDocument();
// expect(screen.getByRole("heading")).toHaveTextContent(/prime number generator/)
// });

describe('App', () => {
  test('renders correctly', () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(/prime number generator/);
  });

  test('generates multiplication table of prime numbers correctly', () => {
    const { getByTestId } = render(<App />);
    const inputElement = getByTestId('number-input');
    const resultElement = getByTestId('result');
    userEvent.change(inputElement, { target: { value: '10' } });
    expect(resultElement.textContent).toBe('2, 3, 5, 7');
  });
});