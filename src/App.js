
import React, { useEffect, useState } from 'react';
import Game from './pages/Game'
import { LoginContextProvider } from './context/LoginContext'
import { ListContextProvider } from './context/ListContext';

const App = () => {

  return (
    <>
      <LoginContextProvider>
        <ListContextProvider>
          <Game />
        </ListContextProvider>
      </LoginContextProvider>
    </>
  );
}

export default App;
