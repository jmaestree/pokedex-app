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
    <div className="flex flex-col min-w-full gap-3">
      <input
        className="flex self-start min-w-[15rem] text-gray-900 text-sm py-1 px-2 shadow-md rounded border border-gray-300 focus:border-gray-900 focus:accent-gray-900 focus:outline-none focus:ring-gray-900"
        type="text"
        placeholder="Search by any field"
      />
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
    </div>
  );
};

export default DataTable;
