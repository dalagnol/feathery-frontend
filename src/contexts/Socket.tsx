import React, { useEffect, createContext } from "react";
import io from "socket.io-client";
import config from "config.json";

const URL = `${config.API_HOST}:${config.SOCKET_PORT}`;
const Server = io(URL);

export const SocketContext = createContext({});

export default function Socket({ children, events, room }: any) {
  useEffect(() => {
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
          Server.on(entry[0], entry[1])
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
  }, []);

  return (
    <SocketContext.Provider value={{ Server }}>
      {children}
    </SocketContext.Provider>
  );
}
