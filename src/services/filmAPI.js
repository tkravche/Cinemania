import { cinemaniaAPI } from './api';

export const getFilms = async () => {
  const { data } = await cinemaniaAPI.get('/api/films');
  return data;
};

