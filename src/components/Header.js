import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'
import ButtonLog from './ButtonLog';
import ButtonSetting from './ButtonSetting';
import SettingsIcon from '@material-ui/icons/Settings';

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
                    <ButtonSetting/>
                    {/* <Button color="inherit" size="small">
                        <SettingsIcon></SettingsIcon>
                    </Button> */}
                </Toolbar>
            </AppBar>
        </>
     );
}
 
export default Header;