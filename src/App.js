import React from "react";
import { Route } from "wouter";
import Game from "./pages/Game";
import { LoginContextProvider } from "./context/LoginContext";
import { ListContextProvider } from "./context/ListContext";
import * as We from "./services/server";
import Landing from "./pages/Landing";
import GlobalStyle from "./globalStyles";

const App = () => {
  We.getWinnersSeasson();
  return (
    <>
      <Route path="/">
        <GlobalStyle />
        <Landing />
        {/* <h1>Hola esta funcionando</h1> */}
      </Route>
      <Route path="/game">
        <LoginContextProvider>
          <ListContextProvider>
            <Game />
          </ListContextProvider>
        </LoginContextProvider>
      </Route>
    </>
  );
};

export default App;
