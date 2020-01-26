import React, { useState, useEffect, createContext } from "react";
import io from "socket.io-client";
import config from "config.json";

const URL = `${config.API_HOST}:${config.SOCKET_PORT}`;

export const SocketContext = createContext({});

export default function Socket({ children, events, room }: any) {
  const Server = io(URL);
  const [SocketStates, setSocketStates]: any = useState({});
  const [SocketParams, setSocketParams]: any = useState({});

  const parametrise = (key: string, value = []) =>
    setSocketParams((state: any) => ({ ...state, [key]: value }));

  const clear = (key: string) =>
    setSocketParams((state: any) => ({ ...state, [key]: undefined }));

  const set = (key: string, value = {}) =>
    setSocketStates((state: any) => ({ ...state, [key]: value }));

  const unset = (key: string) =>
    setSocketStates((state: any) => ({ ...state, [key]: undefined }));

  useEffect(() => {
    Server.removeAllListeners();

    const token = localStorage.getItem("token");

    if (token) {
      Server.emit("Authenticate", token);
    }

    if (room) {
      Server.emit("Join", room);
    }

    if (events) {
      if (events instanceof Array) {
        events.forEach((event: any) => Server.on(event[0], event[1]));
      } else {
        Object.entries(events).forEach((entry: [string, any]) =>
          Server.on(entry[0], () =>
            entry[1](
              { parametrise, clear, set, unset },
              ...SocketParams[entry[0]]
            )
          )
        );
      }
    }

    return () => {
      if (room) {
        Server.emit("Exit", room);
      }
      Server.disconnect();
    };
    // eslint-disable-next-line
  }, [room, events]);

  return (
    <SocketContext.Provider
      value={{
        Server,
        parametrise,
        clear,
        set,
        unset,
        ...SocketStates,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}
