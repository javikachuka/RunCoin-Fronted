import React, {useEffect, useState} from 'react';

const BarContext = React.createContext({})

export const BarContextProvider = ({children}) => {
    
    const [isFull , setIsFull] = useState(false)
    const [lastUser,setLastUser] = useState(null)

    return (
        <BarContext.Provider value={{isFull, setIsFull, lastUser, setLastUser}}>
            {children}
        </BarContext.Provider>
    )
}

export default BarContext;