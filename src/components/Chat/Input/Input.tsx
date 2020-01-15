import React, { useContext } from "react";
import { SocketContext } from "contexts/Socket";
import { useForm } from "shared/hooks";

import { Input as Element } from "./styles";

export default function Input({ room, ...props }: any) {
  const { Server }: any = useContext(SocketContext);
  const [data, { msg }] = useForm({ msg: "" });

  return (
    <Element
      onKeyDown={e => {
        if (e.keyCode === 13) {
          Server.emit("GroupMessage", room, data.msg);
        }
      }}
      {...props}
      {...msg}
    ></Element>
  );
}
