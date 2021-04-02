import React from 'react';
import { Grid, Tooltip, Typography } from '@material-ui/core'
import ProgressBar from './ProgressBar'
import { transformAddress } from '../utils/transformAddress'
import { useLogin } from '../hooks/useLogin';

const ItemGame = (props) => {


    const { user } = useLogin()
    

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
        </>
    );
}

export default ItemGame;