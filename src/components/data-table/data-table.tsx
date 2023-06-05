import React from 'react';
import TableHeader from './header';
import { Column, DataMandatory } from './types';
import { getValue } from './utils';

import './styles.css';

type DataTableProps<T extends DataMandatory, K extends keyof T> = {
  data: T[];
  columns: Column<T, K>[];
};

const DataTable = <T extends DataMandatory, K extends keyof T>({
  data,
  columns
}: DataTableProps<T, K>): JSX.Element => {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <tbody>
        {data.map((row, index) => (
          <tr key={`row-${index}`}>
            {columns.map((column, cellIndex) => {
              return <td key={`cell-${cellIndex}`}>{getValue(row, column)}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
