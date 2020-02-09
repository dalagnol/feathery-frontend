import React from "react";
import { Themed } from "themes";

import { Layout, Socket } from "components";
import Content from "./Content/Content";

export default function Chat() {
  const events = {
    Adimo: console.log,
    Broadcast: console.log,
  };

  return (
    <Socket room={"Adimo"} events={events}>
      <Themed>
        <Layout>
          <Content />
        </Layout>
      </Themed>
    </Socket>
  );
}
