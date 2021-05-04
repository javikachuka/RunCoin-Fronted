import React, {useState}from 'react';
import { claimWinnerPool } from '../../../services/server';
import { PlayButton } from '../CurrentGame/CurrentGame.elements';
import Alert from "../Alert/Alert";

const ButtonClaim = () => {

    const [open, setOpen] = useState(false);
    const [type, setType] = useState(null);
    const [msg, setMsg] = useState(null);

    const handleClick = () => {
        claimWinnerPool().then(
            res => {
                if (res == true) {
                    setType("success")
                    setMsg("Claimed")
                    setOpen(true)
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