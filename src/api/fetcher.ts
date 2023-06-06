// NOTE: This can be an ENV variable,
// I put it here as a constant in order to avoid error configuring ENV variables
const BASE_URL = 'http://localhost:3001';

export const urls = {
  getAll: () => `${BASE_URL}/characters`,
  getById: (id: string) => `${BASE_URL}/characters/${id}`
} as const;

export const getAllPokemons = () => fetch(urls.getAll()).then((res) => res.json());
export const getPokemon = ([_key, id]: string[]) => fetch(urls.getById(id)).then((res) => res.json());
