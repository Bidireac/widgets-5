import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navList: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="secondary">
      <Container>
        <List
          component="nav"
          aria-label="Cocktail-Links"
          className={classes.navList}
        >
          <ListItem button className={classes.listItem}>
            <NavLink to="/random" className={classes.link}>
              <Typography variant="h6">Random Person</Typography>
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink to="/pagination" className={classes.link}>
              <Typography variant="h6">Pagination</Typography>
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink to="/photos" className={classes.link}>
              <Typography variant="h6">Stock Photos</Typography>
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink to="/toggle" className={classes.link}>
              <Typography variant="h6">Dark Mode</Typography>
            </NavLink>
          </ListItem>
        </List>
      </Container>
    </AppBar>
  );
};

export default Navbar;
