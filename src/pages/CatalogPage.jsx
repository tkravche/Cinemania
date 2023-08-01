import React from 'react';
import FilmsList from '../components/Catalog/FilmsList';
import { Container, Grid } from '@mui/material';

const CatalogPage = () => {
  return (
    <Container maxWidth="1206px">
      <FilmsList />
    </Container>
  );
};

export default CatalogPage;
