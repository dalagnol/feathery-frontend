import React from "react";
import { Themed } from "themes";

import { Layout, Chat } from "components";

export default function Adimo() {
  return (
    <Themed>
      <Layout row around>
        <Chat sender={"moresco"} room="Adimo" />
        <Chat sender={"juba"} room="Adimo" />
      </Layout>
    </Themed>
  );
}
