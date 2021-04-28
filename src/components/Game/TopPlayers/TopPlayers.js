import React, { useEffect, useState } from 'react';
import { getWinnersSeason } from '../../../services/server';
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
  } from "../SeasonContent/SeasonContent.elements";

const TopPlayers = () => {

    const [top, setTop] = useState([])

    useEffect(
        () => {

            getWinnersSeason()
                .then(
                    (res) => setTop(res)
                )
                .catch(
                    (error) => console.log(error)
                )
        }, []
    )

    return (
        <>
            <TopListCard>
                <TopHeader>top players</TopHeader>
                <ListHeader>
                    <HeaderNumber>#</HeaderNumber>
                    <HeaderPlayer>player</HeaderPlayer>
                    <HeaderAmount>amount</HeaderAmount>
                </ListHeader>

                {
                    top.map((item, index) => (
                        <ListItem>
                            <ItemNumber>{index + 1}</ItemNumber>
                            <ItemPlayer>{item.address}</ItemPlayer>
                            <ItemAmount>{item.cantGame}</ItemAmount>
                        </ListItem>
                    ))
                }

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
}

export default TopPlayers;