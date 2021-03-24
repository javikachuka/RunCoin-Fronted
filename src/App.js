
import React, { useEffect, useState } from 'react';
import Game from './pages/Game'
import { LoginContextProvider } from './context/LoginContext'
import { ListContextProvider } from './context/ListContext';
import * as We from './services/server';

const App = () => {
  We.getWinnersSeasson();
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
