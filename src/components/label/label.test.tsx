import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './label';

describe('Label', () => {
  it('should render', () => {
    render(<Label>Test content</Label>);

    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('should set the "htmlFor" property', () => {
    render(<Label htmlFor="input-id-random">Test content</Label>);

    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toHaveAttribute('for', 'input-id-random');
  });
});
