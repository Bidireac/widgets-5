import { Routes, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import RandomPerson from './pages/RandomPerson';
import Pagination from './pages/Pagination';
import StockPhotos from './pages/StockPhotos';
import DarkMode from './pages/DarkMode';
import Error from './pages/Error';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 100,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container className={classes.wrapper}>
        <Routes>
          <Route path="/random" element={<RandomPerson />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/photos" element={<StockPhotos />} />
          <Route path="/toggle" element={<DarkMode />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
