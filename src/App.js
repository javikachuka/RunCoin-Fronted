
import { Box, Button, Grid } from '@material-ui/core';
import React from 'react';
import Header from './components/Header';
import Content from './components/Content'
import Navegation from './components/Navegation';
import { Alert, AlertTitle } from '@material-ui/lab';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(()=>({
  paper: {
    padding: 5,
  } 
}))

const App = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container direction="column"  >
        <Grid item >
          <Header />
        </Grid>
        <Box mt={1} >
          <Grid item container>
            <Grid item xs={false} sm={1} ></Grid>
            <Grid item xs={12} sm={8}>
              <Navegation />
            </Grid>
          </Grid>
        </Box>
        <Grid item container justify="center" spacing={0} lg={12} >
          <Grid item className={classes.paper}>
            <Alert severity="success" size="small">
              <AlertTitle>Prize Pool</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>
          </Grid>
          <Grid item className={classes.paper}>
            <Alert severity="info" size="small">
              <AlertTitle>Next Prize</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>
          </Grid>
          <Grid item className={classes.paper}>
            <Alert severity="error" size="small">
              <AlertTitle>Days</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>
          </Grid>
        </Grid>
        <Box mt={2} mb={2}>
          <Grid item container justify="center">
            <Grid item sm={2} ></Grid>
            <Grid item >
              <Content />
            </Grid>
            <Grid item sm={2} ></Grid>
            {/* <Grid item container direction="column" sm={2} justify="space-evenly" alignItems="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Reclamar Premio
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Reclamar Token
              </Button>
              </Grid>
            </Grid> */}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default App;
