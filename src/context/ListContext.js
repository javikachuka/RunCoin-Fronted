import React, { useState } from 'react';


const ListContext = React.createContext({})


export const ListContextProvider = ({children}) => {
    const [list, setList] = useState([])

    return (
        <ListContext.Provider value={{list, setList}} >
            {children}
        </ListContext.Provider>
    )

}

export default ListContext