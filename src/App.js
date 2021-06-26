import React, { useEffect, useState } from "react";
import { Redirect, Route } from "wouter";
import Game from "./pages/Game";
import { LoginContextProvider } from "./context/LoginContext";
import { ListContextProvider } from "./context/ListContext";
import { BarContextProvider } from './context/BarContext'
import * as We from "./services/server";
import Landing from "./pages/Landing";
import GlobalStyle from "./globalStyles";
import Game2 from "./pages/Game2";
import Alert from "./components/Game/Alert/Alert";

const ID_NET = 3

const App = () => {
  const [load, setLoad] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  useEffect(
    () => {
      if (!load) {
        We.getIdNetwork().then(
          res => {
            console.log('aqui en el inicio');
            console.log(res);
            if (res == ID_NET) {
              setLoad(true)
            }else{
              setOpenAlert(true)
            }
          }
        )
      }
    }, [load]
  )


  We.getWinnersSeason();


  return (
    <>
      <GlobalStyle />
      <Alert msg="Network error, you must select the  Polygon / MATIC network" open={openAlert} type="error" icon="error"  />
      <Route exact path="/">
        <LoginContextProvider>
          <ListContextProvider>
            <BarContextProvider>
              <Game2 />
            </BarContextProvider>
          </ListContextProvider>
        </LoginContextProvider>
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
    </>
  );


};

export default App;
