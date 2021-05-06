import React, { useContext, useState, useEffect } from 'react';
import BarContext from '../context/BarContext';
import { useLogin } from './useLogin';

export const useFullBar = () => {

    const {isFull , setIsFull, lastUser, setLastUser} = useContext(BarContext)
    const {user} = useLogin()

    useEffect(
        () => {
            if(lastUser != null ){
                if(user.player == lastUser){
                    setIsFull(true) ;
                }
            }
        }, [isFull,lastUser]
    )

    return {isFull, setIsFull, setLastUser}
}
 
