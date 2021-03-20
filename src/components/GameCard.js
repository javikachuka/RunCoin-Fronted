import React, { useEffect, useState, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import AlertPop from './AlertPop'
import { Eth } from 'react-cryptocoins';
import { play, listPlayerLastSeassons, getUserLogued, watch, getCostPlay } from '../services/server';
import { UserProvider, useUser } from '../context/userContext'
import LoginContext from '../context/LoginContext'
import ListOfPlayers from './ListOfPlayers';
import DetailsList from './DetailsList';


// export default ({ getRealPriceEth }) => (
//   <UserProvider>
//     <GameCard getRealPriceEth={getRealPriceEth}>
//     </GameCard>
//   </UserProvider>
// )

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      minWidth: 320,
      minHeight: 200,
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 400,
      minHeight: 200,
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 800,
      minHeight: 400,
    },
    background: 'rgba(0, 0, 0, 0.12)',
  },
  buttonCard: {
    justifyContent: 'center'
  },
  margenButton: {
    marginTop: '10px'
  },
  hideLastBorder: {
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
  info: {
    padding: 5,
  },
  game: {
    padding: 5,
    marginLeft: 20,
  }
}));

const GameCard = ({ getRealPriceEth }) => {


  const { user, setUser, logued, setLogued } = useContext(LoginContext)
  // const { user, logued } = useUser()
  const classes = useStyles()
  const [cost, setCost] = useState(0)
  const [openPop, setOpenPop] = useState(false)
  const [openPopInfo, setOpenPopInfo] = useState(false)

  const handleClosePop = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenPop(false);
  };

  const handleClosePopInfo = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenPopInfo(false);
  };

  const handleClickOpen = (scrollType) => () => {
    console.log('clickj');
    return (
      <DetailsList scrollType={scrollType} />
    )

  };

  // useEffect(() => {
  //   console.log(listPlayers)
  // }, [])
  useEffect(
    () => {
      console.log("render game card");
      getCostPlay().then(
        (res) => {
          if (res !== false) {
            setCost(res);
          }
        }
      )
      

    }, [logued, user]
  )

  const handlePlay = () => {
    if (logued !== false) {
      setOpenPopInfo(true)
      play(user.player).then(
        (res) => {
          console.log(res);
          console.log("Has Jugado con exito")
        }
      ).catch(
        (error) => {
          console.log('error al juegar ' + error)
        }
      )
    } else {
      console.log('user disconnected')
      setOpenPop(true)
    }
    // getUserLogued().then(
    //   (result) => {
    //     console.log(result)
    //     if (result != null) {
    //       let account = "'" + result + "'";
    //       play(result).then(
    //         (res) => {
    //           console.log(res)
    //           watch()
    //           console.log('termine de ver')
    //         }
    //       )
    //     } else {
    //       console.log('logueese por favor')
    //       setOpenPop(true)
    //     }
    //   }
    // ).catch(
    //   (error) => {
    //     console.log('error al jugar')
    //   }
    // )

  }

  return (
    <Card className={classes.root} variant="elevation" >
      <AlertPop open={openPop} handleClosePop={handleClosePop} type='error' sms='Please connect to a wallet!'></AlertPop>
      <AlertPop open={openPopInfo} handleClosePopInfo={handleClosePopInfo} type='info' sms='Game in queue'></AlertPop>
      <CardContent>
        <Grid container justify="center">
          <Grid item container justify="flex-start" >
            <Grid item container className={classes.info} xs={false} sm={5} >
              <Grid item>
                <Typography variant="h5" gutterBottom style={{ color: '#91091e' }}>Cost:</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ marginLeft: '5px' }}><Eth></Eth> {getRealPriceEth(cost)}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={7} >
              <Button variant="contained" size="large" color="primary" onClick={handlePlay}>Play!</Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={2} className={classes.margenButton} >
            <Grid item xs={12}>
              <ListOfPlayers />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.buttonCard}>
        <Button color="secondary" size="small" onClick={handleClickOpen('body')}>Show more</Button>
      </CardActions>
    </Card>
  );

}

export default GameCard
