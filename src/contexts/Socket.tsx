import React, { useEffect, createContext } from "react";
import io from "socket.io-client";
import config from "config.json";

const URL = `${config.API_HOST}:${config.SOCKET_PORT}`;
const Server = io(URL);

export const SocketContext = createContext({});

export default function Socket({ children, events, room }: any) {
  useEffect(() => {
    Server.emit("Enter Channel", room);

    if (events) {
      events.forEach((event: any) => Server.on(event[0], event[1]));
    }

    return () => {
      Server.emit("Leave Channel", room);
      Server.disconnect();
    };
  });

  return (
    <SocketContext.Provider value={{ Server }}>
      {children}
    </SocketContext.Provider>
  );
}
