import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from './data-table';

import * as dummyData from '../../../db.json';
import { Pokemon } from '../../api/types';

describe('DataTable', () => {
  const defaultProps = {
    data: dummyData.characters as Pokemon[],
    columns: [
      {
        key: 'id',
        title: 'title-ID'
      },
      {
        key: 'name',
        title: 'title-name'
      }
    ]
  } as any;

  test('renders the table', () => {
    render(<DataTable {...defaultProps} />);

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('renders the columns', () => {
    render(<DataTable {...defaultProps} />);

    const tableColumns = screen.getAllByRole('columnheader');
    expect(tableColumns).toHaveLength(defaultProps.columns.length);
  });

  test('renders the rows', () => {
    render(<DataTable {...defaultProps} />);

    const tableRows = screen.getAllByRole('row');

    expect(tableRows).toHaveLength(defaultProps.data.length + 1);
  });
});
