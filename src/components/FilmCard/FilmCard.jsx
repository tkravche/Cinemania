import { Box, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';

const FilmCard = ({ film }) => {
  return (
    <Grid item xs={4}>
      <Paper
        elevation={2}
        sx={{ display: 'relativ', width: '395px', height: '574px' }}
      >
        <Box
          sx={{
            display: 'absolute',
            zIndex: '100',
            backgroundImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.90))',
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt={film.original_title}
          />
          <Box>
            <Typography
              variant="h6"
              component="h2"
              noWrap="true"
              sx={{ textTransform: 'uppercase', color: '#b7b7b7' }}
            >
              {film.original_title}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              noWrap="true"
              sx={{ color: '#b7b7b7' }}
            >
              {film.release_date}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default FilmCard;
