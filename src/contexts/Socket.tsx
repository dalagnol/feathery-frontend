import React, { useState, useEffect, createContext } from "react";
import io from "socket.io-client";
import config from "config.json";

const URL = `${config.API_HOST}:${config.SOCKET_PORT}`;

export const SocketContext: any = createContext({});

export default function Socket({ children, events, room }: any) {
  const [Server, setServer]: any = useState(null);

  useEffect(() => {
    if (!Server) {
      setServer(io(URL));
    }

    if (Server) {
      const token = localStorage.getItem("token");

      if (token) {
        Server.emit("Authenticate", token);
      }

      if (room) {
        Server.emit("Join", room);
      }

      return () => {
        if (room) {
          Server.emit("Exit", room);
        }
        Server.disconnect();
      };
    }

    // eslint-disable-next-line
  }, [Server]);

  useEffect(() => {
    if (Server) {
      Server.removeAllListeners();

      if (events) {
        if (events instanceof Array) {
          events.forEach((event: any) => Server.on(event[0], event[1]));
        } else {
          Object.entries(events).forEach((entry: [string, any]) =>
            Server.on(entry[0], (data: any) => entry[1](data))
          );
        }
      }
    }
  }, [Server, events]);

  return (
    <SocketContext.Provider
      value={{
        Server,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}
