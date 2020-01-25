import React, { useContext } from "react";
import { SocketContext } from "contexts/Socket";

import { Input as Element } from "./styles";

export default function Input({ room, ...msg }: any) {
  const { Server }: any = useContext(SocketContext);
  return (
    <Element
      onKeyDown={e => {
        if (e.keyCode === 13) {
          Server.emit("GroupMessage", room, msg.value);
        }
      }}
      {...msg}
    ></Element>
  );
}
