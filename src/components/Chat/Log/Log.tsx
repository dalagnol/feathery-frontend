import React, { useEffect, useContext } from "react";
import { SocketContext } from "contexts/Socket";
import { useForm } from "shared/hooks";

import { Container } from "./styles";

import Input from "./Input/Input";

export default function Log({ setEvents, room }: any) {
  const { setter, ...socket }: any = useContext(SocketContext);
  const [data, { msg }] = useForm({ msg: "" });

  useEffect(() => {
    setter((state: any) => ({
      ...state,
      message: [(state.message && state.message[0]) || [], data.msg],
    }));
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    if (!socket.message) {
      setter((state: any) => ({
        ...state,
        message: [[], data.msg],
      }));
    }

    setEvents({
      message: (set: any, log: Array<string>, message: string) => {
        set((state: any) => ({ ...state, message: [[...log, message]] }));
      },
    });
    // eslint-disable-next-line
  }, [socket.message]);

  return (
    <Container>
      <Input {...msg} room={room} />
      {socket &&
        socket.message &&
        socket.message[0].map((text: string, i: number) => (
          <p key={i}>{text}</p>
        ))}
    </Container>
  );
}
