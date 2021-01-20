import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'
import ButtonLog from './ButtonLog';
const useStyles = makeStyles(()=>({
    separarDerecha: {
        flex: 1
    }
}))

const Header = () => {
    const classes = useStyles() 
    return ( 
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.separarDerecha}>
                        Run Coin
                    </Typography>
                    <ButtonLog />
                </Toolbar>
            </AppBar>
        </>
     );
}
 
export default Header;