import { Column, DataMandatory } from './types';

function getText(val: string | number) {
  return <span className="capitalize">{val}</span>;
}

export function getValue<T extends DataMandatory, K extends keyof T>(obj: T, col: Column<T, K>) {
  const { key, type } = col;
  const val = obj[key];

  if (typeof val === 'undefined') {
    return '';
  }

  if (type === 'id') {
    return getText(`#${val}`);
  }

  if (type === 'string') {
    return getText(val as string);
  }

  if (type === 'number') {
    return getText(val as number);
  }

  if (type === 'image') {
    return <img className="w-24 aspect-square rounded-full object-scale-down" src={val as string} alt={`${obj.id}`} />;
  }

  return '';
}

export function sortList<T>(list: T[], field: keyof T, order: 'asc' | 'desc') {
  const listOrdered = list.sort((a, b) => {
    const valA = a[field];
    const valB = b[field];

    if (valA < valB) {
      return -1;
    }
    if (valA > valB) {
      return 1;
    }

    return 0;
  });

  if (order === 'desc') {
    return listOrdered.reverse();
  }

  return listOrdered;
}
