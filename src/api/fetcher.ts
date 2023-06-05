// NOTE: This can be an ENV variable,
// I put it here as a constant in order to avoid error configuring ENV variables
const BASE_URL = 'http://localhost:3001';

export const urls = {
  getAll: () => `${BASE_URL}/characters`
} as const;

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

export default fetcher;
