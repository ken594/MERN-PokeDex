import axios from 'axios';

const http = axios.create({ baseURL: 'http://localhost:8000/api' });

export const register = async (payload) => http.post('/register', payload, {withCredentials: true});

export const login = async (payload) => http.post('/login', payload, {withCredentials: true});

export const logout = async () => http.post('/logout', {}, {withCredentials: true});