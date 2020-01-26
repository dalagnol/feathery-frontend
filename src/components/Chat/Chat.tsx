import React, { useState } from "react";
import Socket from "contexts/Socket";

import UI from "./UI/UI";

export default function Chat({ room, sender }: any) {
  const [history, setHistory]: any = useState([]);

  const events = {
    Message: (message: any) => {
      if (message.sender !== sender) {
        setHistory([...history, message]);
      }
    },
  };

  return (
    <Socket room={room} events={events}>
      <UI room={room} sender={sender} state={[history, setHistory]} />
    </Socket>
  );
}
