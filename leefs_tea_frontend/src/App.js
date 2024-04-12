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
        templateAreas={`"header header" "ingredients directions" "walkthrough walkthrough"`}
        gridTemplateRows={'80px 6fr 6fr'}
        gridTemplateColumns={'2fr 2fr'}
        h={1500}
        gap='1'
        color='white' // default text color, typically will override with class identifier
        className='app-text'
      >
        <GridItem area={'header'} className='pastel-blue-bg orange-two-text' fontSize={'25px'}>
          <Header />
        </GridItem>
        <GridItem area={'ingredients'} className='orange-two-bg' fontSize={'25px'}>
          <IngredientContainer />
        </GridItem>
        <GridItem area={'directions'} className='orange-three-bg' fontSize={'25px'}>
          <DirectionsContainer />
        </GridItem>
        <GridItem area={'walkthrough'} className='orange-one-bg' fontSize={'25px'}>
          <VideoWalkthrough />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
