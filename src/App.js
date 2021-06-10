import React from "react";
import { Redirect, Route } from "wouter";
import Game from "./pages/Game";
import { LoginContextProvider } from "./context/LoginContext";
import { ListContextProvider } from "./context/ListContext";
import { BarContextProvider } from './context/BarContext'
import * as We from "./services/server";
import Landing from "./pages/Landing";
import GlobalStyle from "./globalStyles";
import Game2 from "./pages/Game2";

const App = () => {
  We.getWinnersSeason();
  return (
    <>
      <GlobalStyle />
      <Route exact path="/">
        <Redirect to="/game" />
      </Route>
      <Route path="/home">
        <Landing />
        {/* <h1>Hola esta funcionando</h1> */}
      </Route>
      <Route path="/game2">
        <LoginContextProvider>
          <ListContextProvider>
            <Game />
          </ListContextProvider>
        </LoginContextProvider>
      </Route>
      <Route path="/game">
        <LoginContextProvider>
          <ListContextProvider>
            <BarContextProvider>
              <Game2 />
            </BarContextProvider>
          </ListContextProvider>
        </LoginContextProvider>
      </Route>
    </>
  );
};

export default App;
