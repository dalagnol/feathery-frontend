import React, { useContext, useCallback } from "react";
import { LocaleContext } from "../../../useLocale";
import { Config as Configuration } from "../../DevTools";
import { U, copy, map } from "../../../helpers";

import { Container, Header, List } from "./styles";
import { Translate, Delete, Export } from "./styles/icons";

import Property from "./Property/x";

type Props = {
  name: string;
  data: any;
};

function Title({ children }: any) {
  return (
    <h1>
      <span>{"< "}</span>
      {U(children)}
      <span>{" />"}</span>
    </h1>
  );
}

export default function Context({ name, data }: Props) {
  const { contexts, toggleContextValue, set } = useContext(Configuration);
  const { Remove } = useContext(LocaleContext);

  const toggle = (property: string) => (e: any) => {
    e.stopPropagation();
    toggleContextValue(name, property)();
  };

  const clipboard = useCallback(() => copy(data), [data]);

  const { open, editing } = (contexts && contexts[name]) || {};

  const count = Object.entries(data || {})?.length + (editing ? 2 : 1);

  return (
    <Container count={count} name={name} open={open}>
      <Header onClick={toggle("open")}>
        <Title>{name}</Title>
        {open && (
          <div onClick={e => e.stopPropagation()}>
            <Translate onClick={toggle("editing")} />
            <Export
              onClick={clipboard}
              onDoubleClick={set("code", JSON.stringify(data, null, 2))}
            />
            <Delete onClick={() => Remove(name)} />
          </div>
        )}
      </Header>

      {open && (
        <List>
          {map(data, (params: any) => (
            <Property context={name} data={data} {...params} editing={editing}/>
          ))}
        </List>
      )}
    </Container>
  );
}
