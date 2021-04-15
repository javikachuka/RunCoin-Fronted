import React, { useState, useEffect } from "react";
import { miContrato, listPlayerLastSeasons } from "../../../services/server";
import Loading from "../../Loading";
import ProgressBar from "../ProgressBar/ProgressBar";
import { LoadingRow } from "./ListOfPlays.elements";

const ListOfPlayers = () => {
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetchApi();
    miContrato.events.Game(
      {
        fromBlock: "latest",
      },
      (error, event) => {
        console.log("Evento activado");
        setLoad(true);
        fetchApi();
      }
    );
    console.log("saliendo");
  }, []);

  async function fetchApi() {
    await listPlayerLastSeasons(9)
      .then((result) => {
        var array = result.map((r) => {
          return {
            ...r,
            player: r.player,
            timeGame: r.timeGame,
            timestamp: r.timestamp,
            wait: r.wait,
          };
        });
        setList(array);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {load ? (
        <LoadingRow>
          <Loading />
        </LoadingRow>
      ) : (
        list.map((l, index) => {
          return (
            <ProgressBar
              player={l.player}
              timeGame={l.timeGame}
              timestamp={l.timestamp}
              wait={l.wait}
              index={index}
              key={l.player + l.timestamp}
            ></ProgressBar>
          );
        })
      )}
    </>
  );
};

export default ListOfPlayers;
