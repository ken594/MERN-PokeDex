import axios from 'axios';

const http = axios.create({ baseURL: 'http://pokeapi.co/api/v2/pokemon' });

export const getAll = async () => http.get('?limit=131&offset=0');

export const getAllPokeApi = async (id) => http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)