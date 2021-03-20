import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { listPlayerLastSeassons } from '../services/server'


const useStyles = makeStyles((theme) => ({
    table: {
        [theme.breakpoints.up('xs')]: {
            minWidth: 300,
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 550,
        },
    }
}));

const DetailsList = ({ scrollType }) => {

    const [open, setOpen] = React.useState(true);
    const [scroll, setScroll] = React.useState('paper');
    const [listPlayersTotal, setListPlayersTotal] = useState([]);
    const classes = useStyles()

    const handleClose = () => {
        setOpen(false);
    };

    const getDay = (timestamp) => {
        const milliseconds = timestamp * 1000
        const date = new Date(milliseconds)
        return date.toLocaleDateString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }

    useEffect(
        () => {
            setScroll(scrollType);
            listPlayerLastSeassons().then(
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

                }
            ).catch(
                (error) => {
                    console.log('error array total ' + error)
                }
            )
        }, [scrollType]
    )
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                maxWidth='md'
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
        </>
    );
}

export default DetailsList;