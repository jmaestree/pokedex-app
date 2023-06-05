import BarsArrowDownIcon from '../icons/bars-arrow-down';
import BarsArrowUpIcon from '../icons/bars-arrow-up';
import { Sort } from './data-table';
import { Column } from './types';

type TableHeaderProps<T, K extends keyof T> = {
  columns: Column<T, K>[];
  sort: Sort<K>;
  onSelect: (field: K) => void;
};

const TableHeader = <T, K extends keyof T>({ columns, sort, onSelect }: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    return (
      <th
        key={`th-${index}`}
        onClick={() => {
          onSelect(column.key);
        }}
      >
        <span className="inline-flex m-auto items-center">
          {sort.field === column.key && sort.order === 'asc' && <BarsArrowDownIcon />}
          {sort.field === column.key && sort.order === 'desc' && <BarsArrowUpIcon />}
          {column.title}
        </span>
      </th>
    );
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
