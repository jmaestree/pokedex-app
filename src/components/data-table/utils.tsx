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
    return <img className="h-20 w-20 rounded-full" src={val as string} alt={`${obj.id}`} />;
  }

  return '';
}
