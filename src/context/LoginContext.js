import React, {useState} from 'react';

const LoginContext = React.createContext({})

export const LoginContextProvider = ({children}) => {
    const [user, setUser] = useState({player: ""});
    const [logued, setLogued] = useState(false);
    return ( 
        <LoginContext.Provider value={{user,setUser,logued,setLogued}}>
            {children}
        </LoginContext.Provider>
    );
}
 
export default LoginContext;