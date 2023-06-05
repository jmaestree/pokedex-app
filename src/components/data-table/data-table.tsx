import React, { ReactNode } from 'react';
import TableHeader from './header';
import { Column } from './types';

import './styles.css';

type DataTableProps<T, K extends keyof T> = {
  data: T[];
  columns: Column<T, K>[];
};

const DataTable = <T, K extends keyof T>({ data, columns }: DataTableProps<T, K>): JSX.Element => {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <tbody>
        {data.map((row, index) => (
          <tr key={`row-${index}`}>
            {columns.map((column, cellIndex) => {
              return <td key={`cell-${cellIndex}`}>{row[column.key] as ReactNode}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
