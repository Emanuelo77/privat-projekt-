// AboutUs.test.jsx
import { render, screen } from '@testing-library/react';

test('renders About Us section', () => {
  render(<AboutUs />);
  const headingElement = screen.getByText(/about us/i); // Presupunând că ai un text "About Us"
  expect(headingElement).toBeInTheDocument();
});
