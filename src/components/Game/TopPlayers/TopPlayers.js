import React, { useEffect, useState, useContext } from "react";
import {
  getWinnersSeason,
  miContrato,
  getSeasonCurrent,
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

const TopPlayers = () => {
  const [top, setTop] = useState([]);
  const { user } = useContext(LoginContext);
  const [season, setSeason] = useState(0);

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
    getWinnersSeason(e.target.value)
      .then((res) => {
        setTop(res);
      })
      .catch((error) => console.log(error));
  };

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
        <ButtonContainer>
          <ClaimReward>Claim</ClaimReward>
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
