import './App.css';
import { Grid, GridItem } from '@chakra-ui/react'
import Header from './containers/header';
import BookContainer from './containers/book_container';
import ShowsContainer from './containers/shows_container';
import MoviesContainer from './containers/movies_container';

function App() {
  return (
    <div className="App">
      <Grid
        // todo- add responsive for smaller screens
        templateAreas={`"header" "shows" "movies" "books"`}
        h={1500}
        gap='.5'
        color='white' // default text color, typically will override with class identifier
        className='app-text'
      >
        <GridItem area={'header'} className='dark-text'>
          <Header />
        </GridItem>
        <GridItem area={'shows'} className='blue-app-bg' w='100%' h='700px'>
          <ShowsContainer />
        </GridItem>
        <GridItem area={'movies'} className='pale-neutral-bg'  w='100%' h='700px'>
          <MoviesContainer />
        </GridItem>
        <GridItem area={'books'} className='bright-red-bg'  w='100%' h='700px'>
          <BookContainer />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
