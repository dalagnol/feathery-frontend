import React, { useContext } from "react";
import { SocketContext } from "contexts/Socket";

import { Container, Input } from "./styles";

export default function UI({ room, sender, state }: any) {
  const { Server } = useContext(SocketContext);
  const [history, setHistory] = state;

  const handler = (e: any) => {
    const {
      keyCode,
      target: { value },
    } = e;

    if (keyCode === 13) {
      console.log("I happened");
      Server.emit("Message", room, { sender, value });
    }
  };

  return (
    <>
      <Container>
        {history.map((message: any, index: number) => (
          <h5 key={index}>{message.value}</h5>
        ))}
      </Container>
      <Input onKeyDown={handler} />
    </>
  );
}
