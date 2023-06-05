import React, { useState } from 'react';
import TableHeader from './header';
import { Column, DataMandatory } from './types';
import { getValue, sortList } from './utils';
import { useSearch } from '../../hooks/use-search';

import './styles.css';

type DataTableProps<T extends DataMandatory, K extends keyof T> = {
  data: T[];
  columns: Column<T, K>[];
  search?: {
    columns: K[];
  };
};

interface Sort<K> {
  order: 'asc' | 'desc';
  field: K;
}

const DataTable = <T extends DataMandatory, K extends keyof T>({
  data,
  columns,
  search
}: DataTableProps<T, K>): JSX.Element => {
  const { results, matches, searchValue, onSearch } = useSearch(data, search?.columns);
  const [sort, setSort] = useState<Sort<K>>({
    order: 'asc',
    field: 'id' as K
  });

  return (
    <div className="flex flex-col gap-3 w-full overflow-hidden">
      {search?.columns && (
        <div className="flex w-full md:min-w-[15rem] gap-3 items-center">
          <input
            className="flex self-start min-w-[15rem] text-gray-900 text-sm py-1 px-2 shadow-md rounded border border-gray-300 focus:border-gray-900 focus:accent-gray-900 focus:outline-none focus:ring-gray-900"
            type="text"
            placeholder="Search by any field"
            onChange={(e) => onSearch(e?.target?.value)}
          />
          <div className="inline-flex gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-blue-900 ring-1 ring-inset ring-blue-200 bg-blue-50">
            {matches !== undefined && matches > 0 ? `${matches} result(s)` : `No matches with "${searchValue}"`}
          </div>
        </div>
      )}
      <div className="w-full overflow-x-auto">
        <table className="table">
          <TableHeader columns={columns} />
          <tbody>
            {sortList(results, sort.field, sort.order).map((row, index) => (
              <tr key={`row-${index}`}>
                {columns.map((column, cellIndex) => {
                  return <td key={`cell-${cellIndex}`}>{getValue(row, column)}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
