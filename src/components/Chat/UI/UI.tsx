import React, { useContext } from "react";
import { SocketContext } from "contexts/Socket";

import { Container, Input } from "./styles";

export default function UI({ state }: any) {
  const { Server } = useContext(SocketContext);
  const [history, setHistory] = state;

  const handler = (e: any) => {
    const {
      keyCode,
      target: { value },
    } = e;

    if (keyCode === 13) {
      console.log("I happened");
      Server.emit("Broadcast", value);
    }
  };

  return (
    <>
      <Container>
        {history.map((message: string, index: number) => (
          <h5 key={index}>{message}</h5>
        ))}
      </Container>
      <Input onKeyDown={handler} />
    </>
  );
}
