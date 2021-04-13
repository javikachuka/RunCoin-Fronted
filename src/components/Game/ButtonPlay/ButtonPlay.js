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

function ButtonPlay() {
  const { user, setUser, logued, setLogued } = useContext(LoginContext);
  const [cost, setCost] = useState(0);
  const [openPop, setOpenPop] = useState(false);
  const [openPopInfo, setOpenPopInfo] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClosePop = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenPop(false);
  };

  const handleClosePopInfo = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenPopInfo(false);
  };

  const handleClickOpen = (scrollType) => () => {
    console.log("clickj");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          setOpenPopInfo(true);
        })
        .catch((error) => {
          console.log("error al juegar " + error);
        });
    } else {
      console.log("user disconnected");
      setOpenPop(true);
    }
  };
  return (
    <>
      <PlayButton onClick={handlePlay}>PLAY</PlayButton>
    </>
  );
}

export default ButtonPlay;
