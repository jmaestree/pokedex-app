export const urls = {
  getAll: '/characters'
} as const;

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

export default fetcher;
