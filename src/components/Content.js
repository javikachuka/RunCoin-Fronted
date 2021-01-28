import React from 'react';
import { Grid } from '@material-ui/core';
import ExchangeCard from './ExchangeCard'
import GameCard from './GameCard';


const Content = () => {
    return ( 
        <Grid container justify="center">
            <Grid item>
                <GameCard></GameCard>
            </Grid>
        </Grid>
    );
}
 
export default Content;