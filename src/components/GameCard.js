import React, { useEffect, useState, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ProgressBar from './ProgressBar'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ItemGame from './ItemGame';
import AlertPop from './AlertPop'
import { Eth } from 'react-cryptocoins';
import { play, listPlayerLastSeassons, getUserLogued, watch, getCostPlay } from '../services/server';
import { UserProvider, useUser } from '../context/userContext'
import LoginContext from '../context/LoginContext'
import ListOfPlayers from './ListOfPlayers';


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
  table: {
    [theme.breakpoints.up('xs')]: {
      minWidth: 300,
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 550,
    },
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
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [listPlayersTotal, setListPlayersTotal] = useState([]);
  const [cost, setCost] = useState(0)
  const [openPop, setOpenPop] = useState(false)

  const handleClosePop = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenPop(false);
  };

  const handleClickOpen = (scrollType) => () => {
    listPlayerLastSeassons(20).then(
      (result) => {
        var array = result.map(
          (r) => {
            return {
              ...r,
              player: r.player,
              timeGame: r.timeGame,
              timestamp: r.timestamp,
              wait: r.wait,
            }
          }
        )
        setListPlayersTotal(array);
        setOpen(true);
        setScroll(scrollType);
      }
    ).catch(
      (error) => {
        console.log('error array total ' + error)
      }
    )

  };

  const handleClose = () => {
    setOpen(false);
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
      play(user.player).then(
        (res) => {
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

  const getDay = (timestamp) => {

    const milliseconds = timestamp * 1000
    const date = new Date(milliseconds)
    return date.toLocaleDateString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }

  return (
    <Card className={classes.root} variant="elevation" >
      <AlertPop open={openPop} handleClosePop={handleClosePop}></AlertPop>
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
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Players List</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>N</TableCell>
                  <TableCell>Player</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Wait</TableCell>
                  <TableCell align="right">Time Game</TableCell>
                  {/* <TableCell align="right"></TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {listPlayersTotal.map((l, index) => (
                  <TableRow key={l.player + l.timestamp + l.timeGame}>
                    <TableCell component="th" scope="row" >{index}</TableCell>
                    <TableCell component="th" scope="row">
                      {l.player}
                    </TableCell>
                    <TableCell align="right">{getDay(l.timestamp)}</TableCell>
                    <TableCell component="th" scope="row" >{l.wait}</TableCell>
                    <TableCell component="th" scope="row" >{l.timeGame}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );

}

export default GameCard
