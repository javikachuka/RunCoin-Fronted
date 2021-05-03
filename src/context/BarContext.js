import React, {useState} from 'react';

const BarContext = React.createContext({})

export const BarContextProvider = ({children}) => {
    
    const [isFull , setIsFull] = useState(false)

    return (
        <BarContext.Provider value={{isFull, setIsFull}}>
            {children}
        </BarContext.Provider>
    )
}

export default BarContext;