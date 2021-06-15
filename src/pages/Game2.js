import React, {useEffect, useState} from "react";
import Header from "../components/Game/Header/Header";
import Content from "../components/Game/Content/Content";

const Game2 = () => {
  const [reload, setReload] = useState(true);
  return (
    <>
      <Header reload={reload} setReload={setReload} />
      <Content reload={reload} setReload={setReload} />
    </>
  );
};

export default Game2;
