import React, {useEffect, useState} from 'react';
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
import {play, listPlayerLastSeassons} from '../services/server';


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
  game : {
    padding: 5,
    marginLeft: 20,
  }
}));

const GameCard = () => {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(
    () => {
      listPlayerLastSeassons(10).then(
        (result) => {
          console.log(result)
        }
      ).catch(
        (error) => {
          console.log(error)
        }
      )
    }, []
  )

  return (
    <Card className={classes.root} variant="elevation" >
      <CardContent>
        <Grid container justify="center">
          <Grid item container justify="flex-start" >
            <Grid item className={classes.info} xs={false}  sm={5} >
              <Typography variant="h5" gutterBottom style={{color: 'red'}}>Cost</Typography>
            </Grid>
            <Grid item xs={12} sm={7} >
              <Button variant="contained" size="large" color="primary">Play!</Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={2} className={classes.margenButton} >
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom align='left'>
                Id: 00021xxx2132
              </Typography>
              <ProgressBar value={25}></ProgressBar>
              <Typography variant="subtitle2" gutterBottom align='right'>
                time
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom align='left'>
                Id: 00021xxx2132
              </Typography>
              <ProgressBar value={50}></ProgressBar>
              <Typography variant="subtitle2" gutterBottom align='right'>
                time
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom align='left'>
                Id: 00021xxx2132
              </Typography>
              <ProgressBar value={10}></ProgressBar>
              <Typography variant="subtitle2" gutterBottom align='right'>
                time
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom align='left'>
                Id: 00021xxx2132
              </Typography>
              <ProgressBar value={25}></ProgressBar>
              <Typography variant="subtitle2" gutterBottom align='right'>
                time
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom align='left'>
                Id: 00021xxx2132
              </Typography>
              <ProgressBar value={85}></ProgressBar>
              <Typography variant="subtitle2" gutterBottom align='right'>
                time
              </Typography>
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
        <DialogTitle id="scroll-dialog-title">Player List</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Id Block</TableCell>
                  <TableCell align="right">Game Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

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

export default GameCard;