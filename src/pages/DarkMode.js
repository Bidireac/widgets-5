import { Box, Button, Container, Paper, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import data from '../utils/toggleData';
import Article from '../components/Article';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: (props) =>
      props.theme === 'light'
        ? theme.palette.light.bcg
        : theme.palette.dark.bcg,
    transition: 'all 0.5s ease',
  },
  title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '20px 0 50px 0',
    color: (props) =>
      props.theme === 'light'
        ? theme.palette.light.font
        : theme.palette.dark.font,
  },
  button: {
    backgroundColor: (props) =>
      props.theme === 'light'
        ? theme.palette.light.primary
        : theme.palette.dark.primary,
    color: (props) =>
      props.theme === 'light'
        ? theme.palette.dark.font
        : theme.palette.light.font,
  },
}));

const getStorageTheme = () => {
  let theme = 'light';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const DarkMode = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const classes = useStyles({ theme });

  const handleToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <Paper elevation={6} className={classes.container}>
      <Container className={classes.title}>
        <Typography variant="h2" component="h1">
          Dark Mode
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleToggle}
        >
          Toggle
        </Button>
      </Container>
      {data.map((item) => {
        return <Article key={item.id} {...item} theme={theme} />;
      })}
    </Paper>
  );
};

export default DarkMode;
