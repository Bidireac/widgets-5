import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  article: {
    width: '100%',
    height: '100%',
    margin: 30,
  },
  title: {
    color: (props) =>
      props.theme === 'light'
        ? theme.palette.light.primary
        : theme.palette.dark.primary,
  },
  text: {
    marginRight: 5,
    color: (props) =>
      props.theme === 'light'
        ? theme.palette.light.font
        : theme.palette.dark.font,
  },
}));

const Article = ({ title, snippet, date, length, theme }) => {
  const classes = useStyles({ theme });
  return (
    <Container className={classes.article}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        className={classes.title}
      >
        {title}
      </Typography>
      <Box>
        <Typography
          variant="body1"
          component="span"
          gutterBottom
          className={classes.text}
        >
          {moment(date).format('dddd Do, YYYY')}.
        </Typography>
        <Typography
          variant="body1"
          component="span"
          gutterBottom
          className={classes.text}
        >
          {length} min read
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        component="p"
        gutterBottom
        className={classes.text}
      >
        {snippet}
      </Typography>
    </Container>
  );
};

export default Article;
