import React , {useEffect, useState} from 'react';
import Header from '../components/Header';
import Content from '../components/Content'
import Navegation from '../components/Navegation';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Box, Button, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {getCostPlay,getCantDaysCurrentOfSeassons, getReward} from '../services/server';
import * as Parameters from "../services/parameters.js";
// aplicacion para la conexión con la blockchain 
const Web3 = require("web3");
//prueba conectar el proveedor de metamask primero sino usa la varabile en Parameters "provider"
let web3 = new Web3(Web3.givenProvider || Parameters.provider);

const useStyles = makeStyles(()=>({
  paper: {
    padding: 5,
  }
}))

const Game = () => {

    const [daysCurrentSeassons, setDaysCurrentSeassons] = useState(0)
    const [reward, setReward] = useState({
        recompensa: null,
        nextRecompensa: null
    })

    useEffect(
        () => {
            getCantDaysCurrentOfSeassons().then(
                (result) => {
                    console.log(result)
                    setDaysCurrentSeassons(result)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
            getReward().then(
                (result) => {
                    console.log(result.recompensa)
                    setReward({ recompensa: result.recompensa, nextRecompensa: result.nextRecompensa })

                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }, [] // las llaves sirven para ejecutar solamente una vez el useEffect de esta manera copiamos el comportamiento de componentDidMount
    )


    const getRealPriceEth = (wei) => {
        if (wei == 0 || wei == null) {
            return 0
        } else {
            return web3.utils.fromWei(wei, 'ether')
        }
    }


    const classes = useStyles()
    return (
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
                        <strong>$ {getRealPriceEth(reward.recompensa)}</strong>
                    </Alert>
                </Grid>
                <Grid item className={classes.paper}>
                    <Alert severity="info" size="small">
                        <AlertTitle>Next Prize</AlertTitle>
                        <strong>$ {getRealPriceEth(reward.nextRecompensa)}</strong>
                    </Alert>
                </Grid>
                <Grid item className={classes.paper}>
                    <Alert severity="error" size="small">
                        <AlertTitle>Days Season</AlertTitle>
              Days current of season <strong>{daysCurrentSeassons}</strong>
                    </Alert>
                </Grid>
            </Grid>
            <Box mt={2} mb={2}>
                <Grid item container justify="center">
                    <Grid item sm={2} ></Grid>
                    <Grid item >
                        <Content getRealPriceEth={getRealPriceEth} />
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
    );
}

export default Game;