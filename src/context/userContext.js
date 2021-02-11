import React, { useEffect, useState, useMemo } from 'react';
import { getUserLogued } from '../services/server';
const UserContext = React.createContext();

export function UserProvider(props) {
    const [user, setUser] = useState(null);
    const [logued, setLogued] = useState(false);

    useEffect(
        () => {
            getUserLogued().then(
                (res) => {
                    console.log(res)
                    if (res != null) {
                        setLogued(true)
                        setUser({
                            player: res
                        })
                    }
                }
            ).catch(
                (error) => {
                    console.log('error get user '+  error) 
                }
            )
        }, []
    )


    const value = useMemo(
        () => {
            return (
                {
                    user,
                    logued,
                    setLogued
                }
            )
        }, [user,logued]
    )

    return <UserContext.Provider value={value} {...props} />
}

export function useUser() {
    const context = React.useContext(UserContext)
    if (!context) {
        throw new Error('error en el provider')
    }
    return context;
}