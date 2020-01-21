import React, { useState } from "react";
import Socket from "contexts/Socket";

import Log from "./Log/Log";

export default function Chat({ room }: any) {
  const [events, setEvents]: any = useState({});
  return (
    <Socket room={room} events={events}>
      <Log room={room} setEvents={setEvents} />
    </Socket>
  );
}
