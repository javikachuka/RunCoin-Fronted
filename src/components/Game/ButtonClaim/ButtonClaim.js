import React, { useState } from 'react';
import { claimWinnerPool } from '../../../services/server';
import { PlayButton } from '../CurrentGame/CurrentGame.elements';
import Alert from "../Alert/Alert";
import { useFullBar } from '../../../hooks/useFullBar';

const ButtonClaim = () => {

    const [open, setOpen] = useState(false);
    const [type, setType] = useState(null);
    const [msg, setMsg] = useState(null);
    const {setLastUser} = useFullBar()

    const handleClick = () => {
        claimWinnerPool().then(
            res => {
                if (res == true) {
                    setType("success")
                    setMsg("Claimed")
                    setOpen(true)
                    setLastUser(null)
                    const timeout = setTimeout(() => {
                        setOpen(false);
                    }, 4000);
                    return () => {
                        clearTimeout(timeout);
                    };
                }
            }
        )
    }

    return (
        <>
            <Alert icon={type} msg={msg} open={open} type={type} />
            <PlayButton className="claim" onClick={handleClick}>
                CLAIM
            </PlayButton>
        </>
    );
}

export default ButtonClaim;