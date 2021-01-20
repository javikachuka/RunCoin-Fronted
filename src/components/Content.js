import { Grid } from '@material-ui/core';
import React from 'react';
import ExchangeCard from './ExchangeCard'


const Content = () => {
    return ( 
        <Grid container spacing={2}>
            <Grid item sm={false} md={4} >
                <ExchangeCard />
            </Grid>
            <Grid item sm={false} md={4} >
                <ExchangeCard />
            </Grid>
            <Grid item sm={false} md={4} >
                <ExchangeCard />
            </Grid>
            <Grid item sm={false} md={4} >
                <ExchangeCard />
            </Grid>
            <Grid item sm={false} md={4} >
                <ExchangeCard />
            </Grid>
            <Grid item sm={false} md={4} >
                <ExchangeCard />
            </Grid>
            <Grid item sm={false} md={4} >
                <ExchangeCard />
            </Grid>
           
        </Grid>
    );
}
 
export default Content;