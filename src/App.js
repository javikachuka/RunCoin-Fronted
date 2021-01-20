
import { Grid } from '@material-ui/core';
import React from 'react';
import Header from './components/Header';
import Content from './components/Content'
import Navegation from './components/Navegation';


const App = () => {
  return (
    <>
      <Grid container direction="column" spacing={2} >
        <Grid item >
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={1} ></Grid>
          <Grid item xs={12} sm={8}>
            <Navegation />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} ></Grid>
          <Grid item xs={12} sm={8} >
            <Content />
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
