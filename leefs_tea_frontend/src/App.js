import './App.css';
import { Grid, GridItem } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <Grid templateAreas={`"header header" "ingredients directions" "walkthrough walkthrough"`}
          gridTemplateRows={'80px 6fr 6fr'}
          gridTemplateColumns={'2fr 2fr'}
          h={1500}
        gap='1'
        // default text color, typically will override with class identifier
          color='white'
          // fontWeight='bold'
          className='app-text'
      >
        <GridItem area={'header'} className='pastel-blue-bg orange-one-text' fontSize={'25px'}>
          HEADER
        </GridItem>
        <GridItem area={'ingredients'} className='orange-one-bg'>
          ingredients
        </GridItem>
        <GridItem area={'directions'}  className='orange-two-bg'>
          directions
        </GridItem>
        <GridItem area={'walkthrough'} className='orange-three-bg'>
          walkthrough
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
