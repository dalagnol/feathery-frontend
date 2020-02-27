import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container } from "../styles/History";

import Event from "./Event/Event";

export default function History({ open, sections, filters }: any) {
  const { History } = useContext(ThemeContext);

  const Logs = History.filter(
    (log: any) =>
      (filters[log.type] ||
        Object.entries(filters).every(
          (one: any) => ["filter", "system"].includes(one[0]) || !one[1]
        )) &&
      (!filters.filter ||
        sections.includes(log.agent) || !log.agent.includes("<")) &&
      (filters.system || log.type !== "system")
  );

  return (
    <Container open={open}>
      {Logs.reverse().map((log: any, index: number) => (
        <Event key={index} {...log} />
      ))}
      <div style={{ width: "100%", height: "60px" }}></div>
    </Container>
  );
}
