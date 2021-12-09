import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    maxWidth: 500,
    maxHeight: 500,
    '&:hover': {
      '& $cardContent': {
        bottom: 0,
      },
    },
  },
  media: {
    height: 300,
  },
  cardContent: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4);',
    width: '100%',
    bottom: '-150px',
    padding: 0,
    transition: 'all 0.6s ease-out',
  },
  cardText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    padding: 5,
  },
  text: {
    color: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 15,
    marginTop: 15,
  },
}));

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={regular}
          title={alt_description}
        />
        <CardContent className={classes.cardContent}>
          <Box className={classes.cardText}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.text}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              className={classes.text}
            >
              Likes: {likes}
            </Typography>
          </Box>
          <Avatar alt={name} src={medium} className={classes.avatar} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Photo;
