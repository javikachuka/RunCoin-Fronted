import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography'

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
  // const [porcent, setPorcent] = useState(20)
  const [esperar, setEsperar] = useState(props.wait - props.timeGame)
  const [end, setEnd] = useState(props.wait)
  const [isLast, setIsLast] = useState(props.isLast)
  const [timeGame, setTimeGame] = useState(props.timeGame)
  const begin = 20;

  const getHours = (seconds) => {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }

  const getWaitPorcent = () => {
    let difference = aux * 80 / end
    if (difference > 0) {
      return difference
    } else {
      return 0
    }
  }


  useEffect(
    () => {
      // console.log(props)
      if (isLast) {

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
            // console.log('sal')
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

    }, [esperar, value]
  )

  if (isLast) {
    // console.log('last' + props.player)
    // console.log(props.player + ' ' + value)
    // console.log('aux    ' + aux)
    // console.log('esperar    ' + esperar)
    // console.log('waitPorce    ' + getWaitPorcent())
    // console.log('calc    ' + (getWaitPorcent()))
    // console.log(props.wait + ' ' + props.timeGame)
    return (
      <div className={classes.root}>
        <BorderLinearProgressInGame variant="determinate" value={value} />
        <Typography variant="subtitle1" color="initial">{getHours(esperar)}</Typography>
      </div>
    );
  } else if (timeGame >= end) {

    console.log('win' + props.player)

    return (
      <div className={classes.root}>
        <BorderLinearProgressWin variant="determinate" value={value} />
        <Typography variant="subtitle1" color="initial">you have won</Typography>
      </div>
    );
  } else {
    console.log('loss' + props.player)
    return (
      <div className={classes.root}>
        <BorderLinearProgressLoss variant="determinate" value={value} />
        <Typography variant="subtitle1" color="initial"></Typography>
      </div>
    );
  }


}