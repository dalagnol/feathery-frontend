import React, { useState, useEffect, createContext } from "react";
import io from "socket.io-client";
import config from "config.json";

const URL = `${config.API_HOST}:${config.SOCKET_PORT}`;

export const SocketContext: any = createContext({});

export default function Socket({ children, events, room }: any) {
  const [Server, setServer]: any = useState(null);
  const [Rooms, setRooms]: any = useState(
    room instanceof Array ? room : [room]
  );

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
        let rooms = room;
        if (!(rooms instanceof Array)) {
          rooms = [rooms];
        }

        rooms.forEach((r: string) => Server.emit("Join", r));
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

  useEffect(() => {
    if (Server) {
      Rooms.forEach((r: string) => Server.emit("Exit", r));
      let rooms = room;
      if (rooms) {
        if (!(rooms instanceof Array)) {
          rooms = [rooms];
        }

        rooms.forEach((r: string) => Server.emit("Join", r));
        setRooms(rooms);
      }
    }
    // eslint-disable-next-line
  }, [room]);

  return (
    <SocketContext.Provider
      value={{
        Server,
      }}
    >
      {typeof children === "function" ? (
        <SocketContext.Consumer>{children}</SocketContext.Consumer>
      ) : (
        children
      )}
    </SocketContext.Provider>
  );
}
