import React, { useState, useEffect } from 'react';
import { useFetch } from '../utils/useFetch';
import { makeStyles } from '@material-ui/core/styles';
import Follower from '../components/Follower';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    margin: '80px 0 50px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: '10px 0 40px 0',
  },
  divider: {
    backgroundColor: theme.palette.secondary.light,
    height: 4,
  },
  arrowBtn: {
    color: theme.palette.secondary.light,
  },
}));

const Pagination = () => {
  const classes = useStyles();
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <main className={classes.container}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        className={classes.title}
      >
        {loading ? 'Loading...' : 'Pagination'}
        <Divider variant="middle" className={classes.divider} />
      </Typography>
      <Grid container spacing={4} className={classes.followers}>
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />;
        })}
      </Grid>
      {!loading && (
        <Box className={classes.buttons}>
          <Button className={classes.arrowBtn} onClick={prevPage}>
            <ArrowBackIosIcon />
          </Button>
          <ButtonGroup
            color="secondary"
            aria-label="outlined secondary button group"
          >
            {data.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => handlePage(index)}
                  variant={index === page ? 'contained' : null}
                >
                  {index + 1}
                </Button>
              );
            })}
          </ButtonGroup>
          <Button className={classes.arrowBtn} onClick={nextPage}>
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      )}
    </main>
  );
};

export default Pagination;
