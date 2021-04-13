import React from "react";
import {
  CardRow,
  SeasonCard,
  TopListCard,
  PoolHeader,
  EndHeader,
  Subtitle,
  TopHeader,
  ListHeader,
  ListItem,
  HeaderNumber,
  HeaderPlayer,
  HeaderAmount,
  ItemNumber,
  ItemPlayer,
  ItemAmount,
} from "./SeasonContent.elements";

function SeasonContent() {
  return (
    <>
      <CardRow>
        <SeasonCard>
          <PoolHeader>≈$ 125,23</PoolHeader>
          <Subtitle>SEASON POOL</Subtitle>
        </SeasonCard>
        <SeasonCard>
          <EndHeader>29 days </EndHeader>
          <Subtitle>END OF SEASON</Subtitle>
        </SeasonCard>
      </CardRow>
      <TopListCard>
        <TopHeader>top players</TopHeader>
        <ListHeader>
          <HeaderNumber>#</HeaderNumber>
          <HeaderPlayer>player</HeaderPlayer>
          <HeaderAmount>amount</HeaderAmount>
        </ListHeader>
        <ListItem>
          <ItemNumber>1</ItemNumber>
          <ItemPlayer>0x6A...AdE8 </ItemPlayer>
          <ItemAmount>11</ItemAmount>
        </ListItem>
        <ListItem>
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
        </ListItem>
      </TopListCard>
    </>
  );
}

export default SeasonContent;
