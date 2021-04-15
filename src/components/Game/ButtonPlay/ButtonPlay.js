import React, { useEffect, useState, useContext } from "react";
import LoginContext from "../../../context/LoginContext";
import { PlayButton } from "./ButtonPlay.elements";
import {
  play,
  listPlayerLastSeasons,
  getUserLogued,
  watch,
  getCostPlay,
} from "../../../services/server";
import AlertPop from "../../AlertPop";
import Alert from "../Alert/Alert";

function ButtonPlay() {
  const { user, setUser, logued, setLogued } = useContext(LoginContext);
  const [cost, setCost] = useState(0);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleAlertError = (msg) => {
    setType("error");
    setMsg(msg);
    setOpen(true);
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  };
  const handleAlertSuccess = (msg) => {
    setType("success");
    setMsg(msg);
    setOpen(true);
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    console.log("render game card");
    getCostPlay().then((res) => {
      if (res !== false) {
        setCost(res);
      }
    });
  }, [logued, user]);

  const handlePlay = () => {
    if (logued !== false) {
      play()
        .then((res) => {
          console.log(res);
          console.log("Has Jugado con exito");
          handleAlertSuccess("game successfully added");
        })
        .catch((error) => {
          console.log("error al juegar " + error);
        });
    } else {
      console.log("user disconnected");
      handleAlertError("please connect to a wallet");
    }
  };
  return (
    <>
      <Alert icon={type} msg={msg} open={open} type={type} />
      <PlayButton onClick={handlePlay}>PLAY</PlayButton>
    </>
  );
}

export default ButtonPlay;