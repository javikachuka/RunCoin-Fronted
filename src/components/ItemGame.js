import React from 'react';
import { Grid, Tooltip, Typography } from '@material-ui/core'
import ProgressBar from './ProgressBar'
import { transformAddress } from '../utils/transformAddress'
import { useLogin } from '../hooks/useLogin';

const ItemGame = (props) => {


    const { user } = useLogin()
    const getDay = (timestamp) => {
        const milliseconds = timestamp * 1000
        const date = new Date(milliseconds)
        return date.toLocaleDateString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }

    return (
        <>
            {
                user.player == props.player
                    ?
                    <Tooltip title="You" placement="left-start">
                        <Typography variant="subtitle1" gutterBottom align='left' color='primary'>
                            Id: {transformAddress(props.player)}
                        </Typography>
                    </Tooltip>
                    : <Typography variant="subtitle1" gutterBottom align='left'>
                        Id: {transformAddress(props.player)}
                    </Typography>
            }
            <ProgressBar {...props}></ProgressBar>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="subtitle2" gutterBottom align='right' noWrap>
                    <strong>Date:</strong> {getDay(props.timestamp)}
                </Typography>
                {/* <Typography variant="subtitle2" style={{marginLeft:10}} gutterBottom align='right' noWrap>
                <strong>Game Time:</strong> {props.timeGame}
            </Typography> */}
            </div>
        </>
    );
}

export default ItemGame;