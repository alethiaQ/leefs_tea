import './App.css';
import { Grid, GridItem } from '@chakra-ui/react'
import Header from './containers/header';
import VideoWalkthrough from './containers/video_walkthrough';
import IngredientContainer from './containers/ingredient_container';
import DirectionsContainer from './containers/directions_container';

function App() {
  return (
    <div className="App">
      <Grid
        // todo- add responsive for smaller screens
        templateAreas={`"header" "shows" "movies" "books"`}
        h={1500}
        gap='1'
        color='white' // default text color, typically will override with class identifier
        className='app-text'
      >
        <GridItem area={'header'} className='dark-text'>
          <Header />
        </GridItem>
        <GridItem area={'shows'} className='blue-app-bg' w='100%' h='700px'>
          <IngredientContainer />
        </GridItem>
        <GridItem area={'movies'} className='pale-neutral-bg'  w='100%' h='700px'>
          <DirectionsContainer />
        </GridItem>
        <GridItem area={'books'} className='bright-red-bg'  w='100%' h='700px'>
          <VideoWalkthrough />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
