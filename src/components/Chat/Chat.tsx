import React, { useState } from "react";
import Socket from "contexts/Socket";

import { Container } from "./styles";
import Input from "./Input/Input";

export default function Chat({ room }: any) {
  const [log, setLog]: [Array<string>, Function] = useState(["aaa"]);
  console.log(log);
  return (
    <Socket
      room={room}
      events={{
        message: (msg: string) => setLog([msg]),
      }}
    >
      <Container>
        <Input room={room} />
        {log.map((text: string, i: number) => (
          <p key={i}>{text}</p>
        ))}
      </Container>
    </Socket>
  );
}
