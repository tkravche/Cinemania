import React, { useEffect, useState } from 'react';
import { getFilms } from '../../services/filmAPI';
import FilmCard from '../FilmCard/FilmCard';
import { Grid } from '@mui/material';

const FilmsList = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    getFilms()
      .then(data => {
        setFilms(data);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Grid container spacing={2}>
      {films && films.map(film => <FilmCard key={film._id} film={film} />)}
    </Grid>
  );
};

export default FilmsList;
