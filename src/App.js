import React, { useEffect, useState } from "react";
import { Redirect, Route } from "wouter";
import { LoginContextProvider } from "./context/LoginContext";
import { ListContextProvider } from "./context/ListContext";
import { BarContextProvider } from './context/BarContext'
import * as We from "./services/server";
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
      <Alert msg="You must select the chain Polygon/MATIC" open={openAlert} type="error" icon="error"  />
      <Route exact path="/">
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
