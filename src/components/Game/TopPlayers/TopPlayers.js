import React, { useEffect, useState, useContext } from "react";
import {
  getWinnersSeason,
  miContrato,
  getSeasonCurrent,
  claimWinnerSeason,
} from "../../../services/server";
import {
  TopListCard,
  TopHeader,
  ListHeader,
  ListItem,
  HeaderNumber,
  HeaderPlayer,
  HeaderAmount,
  ItemNumber,
  ItemPlayer,
  ItemAmount,
  TopContainer,
  SeasonSelect,
  ListContainer,
  ClaimReward,
  ButtonContainer,
} from "../SeasonContent/SeasonContent.elements";
import { transformAddress } from "../../../utils/transformAddress";
import LoginContext from "../../../context/LoginContext";
import Alert from "../Alert/Alert";

const TopPlayers = () => {
  const [top, setTop] = useState([]);
  const { user } = useContext(LoginContext);
  const [season, setSeason] = useState(0);
  const [seasonSelected, setSeasonSelected] = useState(0)
  //alert
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    loadList();
    miContrato.events.Game(
      {
        // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
        fromBlock: "latest",
      },
      (error, event) => {
        loadList();
      }
    );
  }, []);

  const loadList = () => {
    getSeasonCurrent().then((res) => {
      setSeason(res);
      setSeasonSelected(res)
    });
    getWinnersSeason()
      .then((res) => {
        setTop(res);
      })
      .catch((error) => console.log(error));
  };

  const listMenu = () => {
    let menuItems = [];
    console.log("seasonnn" + season);
    for (let index = season; index >= 0; index--) {
      console.log("creandoooo");
      if (season == index) {
        menuItems.push(
          <option selected value={index} key={index}>
            Season {index}
          </option>
        );
      } else {
        menuItems.push(
          <option value={index} key={index}>
            Season {index}
          </option>
        );
      }
    }
    return menuItems;
  };

  const handleChange = (e) => {
    setSeasonSelected(e.target.value)
    getWinnersSeason(e.target.value)
      .then((res) => {
        setTop(res);
      })
      .catch((error) => console.log(error));
  };

  const handleClick = () => {
    console.log('con ganas de claim');
    if (seasonSelected == season) {
      setType("error")
      setMsg("Can't claim in the last season")
      setOpen(true)
      const timeout = setTimeout(() => {
        setOpen(false);
      }, 4000);
      return () => {
        clearTimeout(timeout);
      }
    } else {
      claimWinnerSeason(seasonSelected)
        .then(
          (res) => {
            if (res == true) {
              setType("success")
              setMsg("Claimed")
              setOpen(true)
              const timeout = setTimeout(() => {
                setOpen(false);
              }, 4000);
              return () => {
                clearTimeout(timeout);
              };
            }
            else {
              setType("error")
              setMsg("Can't claim in this season")
              setOpen(true)
              const timeout = setTimeout(() => {
                setOpen(false);
              }, 4000);
              return () => {
                clearTimeout(timeout);
              }
            }
          }
        )
    }

  }

  return (
    <>
      <TopListCard>
        <TopContainer>
          <TopHeader>top players</TopHeader>
          <SeasonSelect onChange={handleChange}>{listMenu()}</SeasonSelect>
        </TopContainer>

        <ListHeader>
          <HeaderNumber>#</HeaderNumber>
          <HeaderPlayer>player</HeaderPlayer>
          <HeaderAmount>amount</HeaderAmount>
          <HeaderAmount>reward</HeaderAmount>
        </ListHeader>
        <ListContainer>
          {top.map((item, index) => {
            return item.address == user.player ? (
              <ListItem className="player">
                <ItemNumber>{index + 1}</ItemNumber>
                <ItemPlayer>{transformAddress(item.address)}</ItemPlayer>
                <ItemAmount>{item.cantGame}</ItemAmount>
                <ItemAmount>{item.reward}</ItemAmount>
              </ListItem>
            ) : (
              <ListItem>
                <ItemNumber>{index + 1}</ItemNumber>
                <ItemPlayer>{transformAddress(item.address)}</ItemPlayer>
                <ItemAmount>{item.cantGame}</ItemAmount>
                <ItemAmount>{item.reward}</ItemAmount>
              </ListItem>
            );
          })}
        </ListContainer>
        {/* solo cuando pueda reclamar la persona */}
        <Alert icon={type} msg={msg} open={open} type={type} />
        <ButtonContainer>
          <ClaimReward onClick={handleClick}>Claim</ClaimReward>
        </ButtonContainer>

        {/* <ListItem>
                    <ItemNumber>2</ItemNumber>
                    <ItemPlayer>0x6A...AdE8 </ItemPlayer>
                    <ItemAmount>9</ItemAmount>
                </ListItem>
                <ListItem className="player">
                    <ItemNumber>3</ItemNumber>
                    <ItemPlayer>0x34...F9F7</ItemPlayer>
                    <ItemAmount>6</ItemAmount>
                </ListItem>
                <ListItem>
                    <ItemNumber>4</ItemNumber>
                    <ItemPlayer>0x6A...AdE8 </ItemPlayer>
                    <ItemAmount>3</ItemAmount>
                </ListItem> */}
      </TopListCard>
    </>
  );
};

export default TopPlayers;
