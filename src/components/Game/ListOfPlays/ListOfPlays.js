import React, { useState, useEffect } from "react";
import { miContrato, listPlayerLastSeasons, getMorePlayer, getCountPlayersSeason } from "../../../services/server";
import Loading from "../../Logic/Loading";
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
        setLoad(true);
        fetchApi();
        loadCountPlayers()
      }
    );
  }, []);

  const loadMorePlayers = () => {
    setLoadMore(true)
    if(countList != list.length){
      getMorePlayer(9, countList - list.length).then(
        res => {
          if(res != false){
            const newList = list.concat(res)
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
