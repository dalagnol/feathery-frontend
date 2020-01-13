import React from "react";
import Socket from "contexts/Socket";
import { Themed } from "themes";

import { Layout } from "components";
import Content from "./Content/Content";

export default function Chat() {
  const x = [["Adimo", (...msg: any) => console.log(...msg)]];
  return (
    <Socket room={"Adimo"} events={x}>
      <Themed>
        <Layout>
          <Content />
        </Layout>
      </Themed>
    </Socket>
  );
}
