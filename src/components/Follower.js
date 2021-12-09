import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
    height: 300,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
  },
  button: {
    borderRadius: 20,
  },
}));

const Follower = ({ avatar_url, html_url, login }) => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Paper elevation={3} className={classes.paper}>
        <Avatar alt={login} src={avatar_url} className={classes.avatar} />
        <Typography variant="h5" component="h1">
          {login}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          view profile
        </Button>
      </Paper>
    </Grid>
  );
};

export default Follower;
