import React, { useState } from "react";
import Socket from "contexts/Socket";

import UI from "./UI/UI";

export default function Chat() {
  const [history, setHistory]: any = useState([]);

  const events = {
    Broadcast: (message: string) => {
      setHistory([...history, message]);
    },
  };

  return (
    <Socket room={"Adimo"} events={events}>
      <UI state={[history, setHistory]} />
    </Socket>
  );
}
