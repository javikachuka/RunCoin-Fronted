import React, { useEffect, useState, useContext } from 'react';
import LoginContext from '../context/LoginContext'
import { getUserLogued } from '../services/server';

export const useLogin = () => {

    const { user, setUser, logued, setLogued } = useContext(LoginContext)

    useEffect(
        () => {
            console.log('render');
            getUserLogued().then(
                (res) => {
                    if(res != null){
                        setLogued(true)
                        setUser({
                            player: res
                        })
                    }
                }
            ).catch(
                (error) => {
                    console.log('error en use hook', error);
                }
            )

        }, []
    )

    return { user, logued, setLogued, setUser }
}

