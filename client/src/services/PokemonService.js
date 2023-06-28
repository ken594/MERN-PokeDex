import axios from 'axios';

const http = axios.create({ baseURL: 'http://pokeapi.co/api/v2/pokemon' });

export const getAll = async () => http.get('?limit=131&offset=0');