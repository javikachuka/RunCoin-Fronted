import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { transformAddress } from '../utils/transformAddress';

const useStyles = makeStyles((theme) => ({
    table: {
        [theme.breakpoints.up('xs')]: {
            minWidth: 150,
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 150,
        },
    }
}));

const ListPlayersTop = () => {
    const classes = useStyles();

    const [top, setTop] = useState([{player: "0xF60935CC2e22f50ded1f75b0aB0600de97Fe7518", cant: 15}, {player: "0x6Ae00a23234c8654eA9ca61e198Cf9172a7CAdE8", cant: 15}])


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>N</TableCell>
                        <TableCell>Player</TableCell>
                        <TableCell align="right">Amount of plays</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {top.map((row, index) => (
                        <TableRow key={row.player}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="right">{transformAddress(row.player)}</TableCell>
                            <TableCell align="right">{row.cant}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListPlayersTop;