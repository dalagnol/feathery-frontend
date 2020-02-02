import React, { useState } from "react";
import { observer } from "mobx-react";
import { useExternalClick } from "utils/hooks";

import { Background, Container, Popup, ArrowUp } from "./styles";
import Tile from "./Tile/Tile";

export default observer(function Pane(props: any) {
  const [notifications] = useState([
    {
      title: "Adimo potestas",
      description: "Adimo potestas tua quae, tibi donat fortunam pugnae.",
    },
  ]);
  const ref = useExternalClick(props.close);

  return (
    props.open && (
      <Background {...props}>
        <Container>
          <ArrowUp {...props} />
          <Popup ref={ref} {...props}>
            <h2>Notifications</h2>
            {notifications.map((notification: any, index: number) => (
              <Tile data={notification} key={index} />
            ))}
          </Popup>
        </Container>
      </Background>
    )
  );
});
