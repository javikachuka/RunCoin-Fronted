import React, { useState, useEffect } from "react";
import { miContrato, listPlayerLastSeasons, getMorePlayer, getCountPlayersSeason } from "../../../services/server";
import Loading from "../../Loading";
import ProgressBar from "../ProgressBar/ProgressBar";
import { LoadingRow } from "./ListOfPlays.elements";
import { MoreButton } from "../CurrentGame/CurrentGame.elements"
import { ListItemIcon } from "@material-ui/core";
import { SmsOutlined } from "@material-ui/icons";

const ListOfPlayers = () => {
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(true);
  const [loadMore, setLoadMore] = useState(false);
  const [countList, setCountList] = useState(0);

  useEffect(() => {
    fetchApi();
    loadCountPlayers()
    miContrato.events.Game(
      {
        fromBlock: "latest",
      },
      (error, event) => {
        console.log("Evento activado");
        setLoad(true);
        fetchApi();
        loadCountPlayers()
      }
    );
    console.log("saliendo");
  }, []);

  const loadMorePlayers = () => {
    console.log('pidiendo mas');
    setLoadMore(true)
    console.log(countList);
    console.log(list.length);
    console.log(list);
    if(countList != list.length){
      getMorePlayer(9, countList - list.length).then(
        res => {
          console.log(res);
          if(res != false){
            const newList = list.concat(res)
            console.log(newList);
            setList(newList)
          }
          setLoadMore(false)
        }
      )
    }
  }

  const loadCountPlayers = () => {
    getCountPlayersSeason().then(
      res => {
        console.log(res);
        setCountList(res)
      }
    )
  }

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

  const handleLoadMore = () => {
    console.log('apretado');
    loadMorePlayers()
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
      {
        loadMore 
          ?
            <LoadingRow>
              <Loading />
            </LoadingRow>
          : null
      }
      <MoreButton onClick={handleLoadMore}>Show More</MoreButton>
    </>
  );
};

export default ListOfPlayers;
