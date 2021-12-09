import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    width: '60%',
    height: 450,
    position: 'relative',
  },
  avatar: {
    width: 140,
    height: 140,
    position: 'absolute',
    marginTop: 100,
  },
  upperContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: theme.palette.action.selected,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    marginTop: 20,
    height: '70%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: theme.palette.text.primary,
  },
  icon: {
    fontSize: 30,
    margin: 20,
  },
}));

const RandomPerson = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  return (
    <Container className={classes.wrapper}>
      <Paper elevation={10} square={true} className={classes.paper}>
        <Box className={classes.upperContainer}>
          <Avatar
            alt="random user"
            src={(person && person.image) || defaultImage}
            className={classes.avatar}
          />
        </Box>
        <Divider className={classes.divider} />
        <Box className={classes.lowerContainer}>
          <Typography variant="subtitle1" component="p" gutterBottom>
            My {title} is:
          </Typography>
          <Typography variant="h4" component="p" gutterBottom>
            {value}
          </Typography>
          <Box>
            <Button
              data-label="name"
              onMouseOver={handleValue}
              className={`${classes.icon} icon`}
            >
              <FaUser />
            </Button>
            <Button
              data-label="email"
              onMouseOver={handleValue}
              className={`${classes.icon} icon`}
            >
              <FaEnvelopeOpen />
            </Button>
            <Button
              data-label="age"
              onMouseOver={handleValue}
              className={`${classes.icon} icon`}
            >
              <FaCalendarTimes />
            </Button>
            <Button
              data-label="street"
              onMouseOver={handleValue}
              className={`${classes.icon} icon`}
            >
              <FaMap />
            </Button>
            <Button
              data-label="phone"
              onMouseOver={handleValue}
              className={`${classes.icon} icon`}
            >
              <FaPhone />
            </Button>
            <Button
              data-label="password"
              onMouseOver={handleValue}
              className={`${classes.icon} icon`}
            >
              <FaLock />
            </Button>
          </Box>
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            onClick={getPerson}
          >
            {loading ? 'loading...' : 'random user'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default RandomPerson;
