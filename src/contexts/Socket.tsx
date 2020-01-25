import React, { useState, useEffect, createContext } from "react";
import io from "socket.io-client";
import config from "config.json";

const URL = `${config.API_HOST}:${config.SOCKET_PORT}`;

export const SocketContext = createContext({});

export default function Socket({ children, events, room }: any) {
  const Server = io(URL);
  const [socket, setter]: any = useState({});

  console.log(socket);

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
        console.log(socket.message);
        Object.entries(events).forEach((entry: [string, any]) =>
          Server.on(entry[0], () => entry[1](setter, ...socket[entry[0]]))
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
    <SocketContext.Provider value={{ Server, setter, ...socket }}>
      {children}
    </SocketContext.Provider>
  );
}
