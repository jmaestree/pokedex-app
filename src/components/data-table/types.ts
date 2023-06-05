export type Column<T, K extends keyof T> = {
  key: K;
  title: string;
};
