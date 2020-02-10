import React, { useContext } from "react";
import { SocketContext } from "components";

export default function Content() {
  const { Server }: any = useContext(SocketContext);

  const test = () => Server.emit("Broadcast", "test");

  return (
    <div>
      <h1 onClick={test}>teste</h1>
    </div>
  );
}
