import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Load, Save } from "../../helpers";

import { Container, Header, Title } from "./styles";
import { Info, Error, System, Warning, Clear, Filter } from "./styles/icons";

import Event from "./Event/Event";

const LS = "theme_devtools_history_filters";

export default function History({ open, toggle }: any) {
  const { History, ClearHistory } = useContext(ThemeContext);
  const [filters, setFilters] = useState(
    Load(LS, {
      SYSTEM: true,
      INFO: false,
      ERROR: false,
      WARNING: false,
      FILTER: false,
    })
  );

  console.log(History);

  const set = (name: string) => () => {
    const State = { ...filters, [name]: !filters[name] };
    setFilters(State);

    Save(LS, State);
  };

  const clearHistory = () => {
    ClearHistory();
    toggle();
  };

  const Logs = History.filter(
    (log: any) =>
      Object.values(filters)
        .slice(0, 3)
        .every((filter: any) => !filter) || filters[log.type]
  );

  return (
    <Container open={open}>
      <Header>
        <Title onClick={toggle}>History</Title>
        <div>
          <System active={filters.SYSTEM} onClick={set("SYSTEM")} />
          <Info active={filters.INFO} onClick={set("INFO")} />

          <Error active={filters.ERROR} onClick={set("ERROR")} />
          <Warning active={filters.WARNING} onClick={set("WARNING")} />
          <Filter active={filters.FILTER} />

          <Clear onClick={clearHistory} />
        </div>
      </Header>

      {Logs.map((log: any, index: number) => (
        <Event key={index} {...log} />
      ))}
    </Container>
  );
}
