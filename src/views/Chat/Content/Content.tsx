import React, { useContext } from "react";
import { SocketContext } from "contexts/Socket";

export default function Content() {
  const { Server }: any = useContext(SocketContext);
  console.log(Server);
  return (
    <div>
      <h1 onClick={() => Server.emit("Broadcast", "test")}>teste</h1>
    </div>
  );
}
