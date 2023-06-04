import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App layout', () => {
  test('renders main content', () => {
    render(<App />);

    const linkElement = screen.getByText(/My app/i);
    expect(linkElement).toBeInTheDocument();
  });
});
