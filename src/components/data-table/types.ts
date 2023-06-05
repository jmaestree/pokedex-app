export type DataMandatory = { id: string | number };

export type Column<T, K extends keyof T> = {
  key: K;
  title: string;
  type: 'string' | 'image' | 'id' | 'number';
};
