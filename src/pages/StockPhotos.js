import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Photo from '../components/Photo';
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core';

const apiKey = 'Jddye8ekQtIktoUmsfA7n-Ut0U5RP-KGTEk7QkpZwgQ';
const clientID = `?client_id=${apiKey}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    margin: 35,
  },
  formText: {
    fontSize: 20,
  },
  loading: {
    textAlign: 'center',
  },
}));

const StockPhotos = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((currentData) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...currentData, ...data.results];
        } else {
          return [...currentData, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page]);
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY - 100 >=
          document.body.scrollHeight - 2
      ) {
        setPage((currentPage) => {
          return currentPage + 1;
        });
      }
    });
    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControl>
          <InputLabel htmlFor="my-input" className={classes.formText}>
            Search
          </InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            className={classes.formText}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FormControl>
        <Button type="submit">
          <SearchIcon />
        </Button>
      </form>
      <Box>
        <Grid container spacing={3}>
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </Grid>
        {loading && (
          <Typography variant="h4" component="p" className={classes.loading}>
            Loading...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default StockPhotos;
