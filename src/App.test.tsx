import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App layout', () => {
  test('renders the navbar', () => {
    render(<App />);

    const headingElement = screen.getByRole('heading', { level: 1, name: /Pokédex/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders main content', () => {
    render(<App />);

    const contentElement = screen.getByText(/My app/i);
    expect(contentElement).toBeInTheDocument();
  });
});
