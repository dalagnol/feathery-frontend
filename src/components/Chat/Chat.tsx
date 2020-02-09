import React, { useState } from "react";

import { Container, Input } from "./styles";

import { Socket } from "components";

export default function Chat({ room, sender }: any) {
  const [history, setHistory]: any = useState([]);

  const handler = (e: any, Server: any) => {
    const {
      keyCode,
      target: { value },
    } = e;

    if (keyCode === 13) {
      Server.emit("Message", room, { sender, value });
    }
  };

  const events = {
    Message: (message: any) => {
      if (message.sender !== sender) {
        setHistory([...history, message]);
      }
    },
  };

  return (
    <Socket room={room} events={events}>
      {({ Server }: any) => (
        <>
          <Container>
            {history.map((message: any, index: number) => (
              <h5 key={index}>{message.value}</h5>
            ))}
          </Container>
          <Input onKeyDown={(e: any) => handler(e, Server)} />
        </>
      )}
    </Socket>
  );
}
