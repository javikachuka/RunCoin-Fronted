import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { transformSecondsToHuman } from '../utils/transformSecondsToHuman';
import { Box } from '@material-ui/core';

const BorderLinearProgressInGame = withStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 0,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const BorderLinearProgressLoss = withStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 0,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'red',
  },
}))(LinearProgress);

const BorderLinearProgressWin = withStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 0,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'green',
  },
}))(LinearProgress);


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProgressBar(props) {
  const classes = useStyles();
  const [value, setValue] = useState(20);
  const [aux, setAux] = useState(props.timeGame)
  const [isLast, setIsLast] = useState(props.index === 0 ? true : false)
  // const [porcent, setPorcent] = useState(20)
  const [esperar, setEsperar] = useState(props.wait - props.timeGame)
  const [end, setEnd] = useState(props.wait)
  const [timeGame, setTimeGame] = useState(props.timeGame)
  const begin = 20;

  const getHours = (seconds) => {
    return transformSecondsToHuman(seconds)
  }

  const getWaitPorcent = () => {
    let difference = aux * 80 / end
    if (difference > 0) {
      return difference
    } else {
      return 0
    }
  }

  const getDay = (timestamp) => {
    const milliseconds = timestamp * 1000
    const date = new Date(milliseconds)
    return date.toLocaleDateString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }


  useEffect(
    () => {
      let montado = true
      if (props.index === 0) {
        setIsLast(true)
      } else {
        setIsLast(false)
      }
      // console.log(props)
      // console.log("render progress bar");
      if (isLast && (timeGame < end)) {

        const timer = setTimeout(() => {

          // console.log('callculo ' porcent )
          // console.log(porcent)
          if (esperar >= 0) {
            // console.log( 'fin ' +  end)
            // console.log( 'aux  ' + aux)

            // console.log( 'esperar ' + esperar)
            // // console.log(aux)
            // console.log( 'espera ' + (begin + (aux * 80 / end)))
            setAux(aux + 1)
            setEsperar(esperar - 1)
            // setPorcent(begin + (aux * 80 / end))
            // console.log('entre')
            setValue(begin + getWaitPorcent());
          } else {
            console.log('salppepepepp')
            return () => clearTimeout(timer)
          }
        }, 1000);
        // let porcent = 0 
        // let aux = 0
      } else {
        if (timeGame >= end) {
          setValue(100)
        } else {
          // console.log(timeGame*80/esperar)
          setValue(begin + getWaitPorcent())
        }
      }

      return () => console.log('desmontando');

    }, [esperar, value]
  )

  if (isLast && (timeGame < end)) {
    return (
      <div className={classes.root}>
        <BorderLinearProgressInGame variant="determinate" value={value} />
        <Box component="div" display="flex" p={0} m={0}>
          <Box width="50%">
            <Typography variant="subtitle2" color="initial">{getHours(esperar)}</Typography>
          </Box>
          <Box width="50%">
            <Typography variant="subtitle2" gutterBottom align='right' noWrap>
              <strong>Date:</strong> {getDay(props.timestamp)}
            </Typography>
          </Box>
        </Box>
        {/* <Typography variant="subtitle2" style={{marginLeft:10}} gutterBottom align='right' noWrap>
                <strong>Game Time:</strong> {props.timeGame}
            </Typography> */}

      </div>
    );
  } else if (timeGame >= end) {

    return (
      <div className={classes.root}>
        <BorderLinearProgressWin variant="determinate" value={value} />
        <Box component="div" display="flex" p={0} m={0}>
          <Box width="50%">
            <Typography variant="subtitle1" color="initial"><SentimentVerySatisfiedIcon color="secondary" /></Typography>
          </Box>
          <Box width="50%">
            <Typography variant="subtitle2" gutterBottom align='right' noWrap>
              <strong>Date:</strong> {getDay(props.timestamp)}
            </Typography>
          </Box>
        </Box>
        {/* <Typography variant="subtitle2" style={{marginLeft:10}} gutterBottom align='right' noWrap>
                <strong>Game Time:</strong> {props.timeGame}
            </Typography> */}
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <BorderLinearProgressLoss variant="determinate" value={value} />
        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}> */}
        <Box component="div" display="flex" p={0} m={0}>
          <Box width="50%">
            <Typography variant="subtitle1" color="initial"><SentimentDissatisfiedIcon color="action" style={{ color: '#e57373' }} /></Typography>
          </Box>
          <Box width="50%">
            <Typography variant="subtitle2" gutterBottom align='right' noWrap>
              <strong>Date:</strong> {getDay(props.timestamp)}
            </Typography>
          </Box>
        </Box>
        {/* <Typography variant="subtitle2" style={{marginLeft:10}} gutterBottom align='right' noWrap>
                <strong>Game Time:</strong> {props.timeGame}
            </Typography> */}
        {/* </div> */}
      </div>
    );
  }


}