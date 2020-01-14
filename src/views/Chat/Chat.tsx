import React from "react";
import Socket from "contexts/Socket";
import { Themed } from "themes";

import { Layout } from "components";
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
