import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './navbar';

describe('Navbar', () => {
  test('renders the navbar', () => {
    render(<Navbar />);

    const headingElement = screen.getByRole('heading', { level: 1, name: /Pokédex/i });
    expect(headingElement).toBeInTheDocument();
  });
});
