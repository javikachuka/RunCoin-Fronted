import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 800,
      minHeight: 400,
      background: 'rgba(0, 0, 0, 0.12)',
    },
  });

const GameCard = () => {

    const classes = useStyles()

    return (
        <Card className={classes.root} variant="elevation" >
            <CardContent>
                
            </CardContent>
            <CardActions >
                <Grid container justify="center">
                    <Grid item>
                        <Button color="primary">Jugarrrr!</Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default GameCard;