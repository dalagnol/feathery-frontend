import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Config as Configuration } from "../DevTools";

import { Container, Header, Title } from "./styles";
import { Info, Error, System, Warning, Clear, Filter } from "./styles/icons";

import Event from "./Event/Event";

export default function History({ open, toggle }: any) {
  const { History, ClearHistory } = useContext(ThemeContext);
  const { toggleFilter, filter, contexts } = useContext(Configuration);

  const clearHistory = () => {
    ClearHistory();
    toggle();
  };

  const Logs = History.filter(
    (log: any) =>
      (Object.values(filter)
        .slice(0, 3)
        .every((filter: any) => !filter) ||
        filter[log.type]) &&
      (!filter.FILTER || contexts[log.agent.toLowerCase()]?.open)
  );

  const props: any = {};
  ["SYSTEM", "INFO", "ERROR", "WARNING", "FILTER"].forEach((key: string) => {
    props[key] = {
      active: filter[key],
      onClick: toggleFilter(key),
    };
  });

  return (
    <Container open={open}>
      <Header>
        <Title onClick={toggle}>History</Title>
        <div>
          <System {...props["SYSTEM"]} />
          <Info {...props["INFO"]} />
          <Error {...props["ERROR"]} />
          <Warning {...props["WARNING"]} />
          <Filter {...props["FILTER"]} />
          <Clear onClick={clearHistory} />
        </div>
      </Header>

      {Logs.reverse().map((log: any, index: number) => (
        <Event key={index} {...log} />
      ))}
    </Container>
  );
}
