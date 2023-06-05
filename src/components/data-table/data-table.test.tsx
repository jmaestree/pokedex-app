import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from './data-table';

describe('DataTable', () => {
  test('renders the table', () => {
    render(<DataTable />);

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('renders the columns', () => {
    render(<DataTable />);

    const tableColumns = screen.getAllByRole('columnheader');
    expect(tableColumns).toHaveLength(2);
  });

  test('renders the rows', () => {
    render(<DataTable />);

    const tableRows = screen.getAllByRole('row');

    expect(tableRows).toHaveLength(4);
  });
});
