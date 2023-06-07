import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Input } from './input';

describe('Input', () => {
  it('should render without label', () => {
    render(<Input />);

    expect(screen.queryByText(/label/i)).not.toBeInTheDocument();
  });

  it('should render with label', () => {
    render(<Input id="input" label="Email" />);

    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });

  it('should render with helper text', () => {
    render(<Input id="input" label="Email" helperText="Helper text" />);

    expect(screen.getByText(/helper text/i)).toBeInTheDocument();
  });

  it('should hide the input if the type is "hidden', () => {
    render(<Input id="input" type="hidden" label="Email" />);

    const input = screen.getByLabelText(/email/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('hidden');
  });

  describe('Input state', () => {
    it('Default', () => {
      render(<Input id="input" label="Email" helperText="Normal message" />);
      const input = screen.getByLabelText(/email/i);
      const label = screen.getByText(/email/i);
      const helperText = screen.getByText(/normal message/i);

      expect(input).toHaveAttribute('data-form-control-status', 'Default');
      expect(label).toHaveAttribute('data-form-label-status', 'Default');
      expect(helperText).toHaveAttribute('data-form-helper-status', 'Default');
    });

    it('Success', () => {
      render(<Input id="input" label="Email" helperText="Success message" status="Success" />);
      const input = screen.getByLabelText(/email/i);
      const label = screen.getByText(/email/i);
      const helperText = screen.getByText(/success message/i);

      expect(input).toHaveAttribute('data-form-control-status', 'Success');
      expect(label).toHaveAttribute('data-form-label-status', 'Success');
      expect(helperText).toHaveAttribute('data-form-helper-status', 'Success');
    });

    it('Error', () => {
      render(<Input id="input" label="Email" helperText="Error message" status="Error" />);
      const input = screen.getByLabelText(/email/i);
      const label = screen.getByText(/email/i);
      const helperText = screen.getByText(/error message/i);

      expect(input).toHaveAttribute('data-form-control-status', 'Error');
      expect(label).toHaveAttribute('data-form-label-status', 'Error');
      expect(helperText).toHaveAttribute('data-form-helper-status', 'Error');
    });
  });

  it('should render with custom label properties', () => {
    render(<Input id="input" label="Email" labelProps={{ className: 'text-info' }} />);
    const label = screen.getByText(/email/i);
    expect(label).toHaveClass('text-info');
  });

  it('should update input value', async () => {
    render(<Input id="input" label="Email" />);
    const input = screen.getByLabelText(/email/i);

    user.type(input, 'test@test.com');

    expect(input).toHaveValue('test@test.com');
  });
});
