import { Column } from './types';

type TableHeaderProps<T, K extends keyof T> = {
  columns: Column<T, K>[];
};

const TableHeader = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    return <th key={`th-${index}`}>{column.title}</th>;
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
