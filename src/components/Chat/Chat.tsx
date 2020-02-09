import React, { useState } from "react";
import { useTimer } from "utils/hooks";
import { observer } from "mobx-react";

import { Outer, Container, Input } from "./styles";

import { Socket } from "components";

import Store from "store/Users";

export default observer(function Chat() {
  const [history, setHistory]: any = useState([]);
  const [room, setRoom]: any = useState("Adimo");
  const [typing, setTyping] = useTimer(2000);

  const { user } = Store;

  const handler = (e: any, Server: any) => {
    e.persist();

    const {
      keyCode,
      target: { name, value },
    } = e;

    if (keyCode === 13) {
      if (name === "room") {
        setRoom(value);
      } else {
        Server.emit("Message", room, { sender: user.name, value });
        e.currentTarget.value = "";
      }
    } else {
      if (name === "message") {
        Server.emit("Typing", room, { typist: user.name });
      }
    }
  };

  const events = {
    Message: (message: any) => {
      setHistory([...history, message]);
      setTyping(false);
    },
    Typing: ({ typist }: any) => {
      if (typist !== user.name) {
        setTyping(typist);
      }
    },
    Joined: (username: any) => {
      if (username !== user.identifier) {
        setHistory([
          ...history,
          {
            sender: "System",
            value: `${username} has joined the room.`,
          },
        ]);
      }
    },
    Left: (username: any) => {
      if (username !== user.identifier) {
        setHistory([
          ...history,
          {
            sender: "System",
            value: `${username} has left the room.`,
          },
        ]);
      }
    },
  };

  return (
    <Socket room={room} events={events}>
      {({ Server }: any) => (
        <Outer>
          <Input
            name="room"
            defaultValue={room}
            onKeyDown={(e: any) => handler(e, Server)}
          />
          <Container>
            {history.map((message: any, index: number) => (
              <h5 key={index}>
                {message.sender}: <span>{message.value}</span>
              </h5>
            ))}
            {typing && <p>{typing} is typing...</p>}
          </Container>
          <Input name="message" onKeyDown={(e: any) => handler(e, Server)} />
        </Outer>
      )}
    </Socket>
  );
});
