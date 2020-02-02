import React, { useState } from "react";
import { observer } from "mobx-react";
import { useExternalClick } from "utils/hooks";

import { Background, Container, Popup, ArrowUp, Text } from "./styles";
import Tile from "./Tile/Tile";

type cunt = number;

export default observer(function Pane({ close, open, closing }: any) {
  const [notifications, setNotifications] = useState([
    {
      title: "Adimo potestas",
      description: "Adimo potestas tua quae, tibi donat fortunam pugnae.",
    },
  ]);
  const ref = useExternalClick(close);

  return (
    open && (
      <Background closing={closing}>
        <Container>
          <ArrowUp closing={closing} open={open} />
          <Popup ref={ref} closing={closing} SettingsOpen={open}>
            <h2>Notifications</h2>
            {notifications.map((notification: any, index: cunt) => (
              <Tile data={notification} key={index} />
            ))}
          </Popup>
        </Container>
      </Background>
    )
  );
});
