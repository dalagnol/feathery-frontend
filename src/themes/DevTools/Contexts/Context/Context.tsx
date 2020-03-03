import React, { useContext, useCallback } from "react";
import { ThemeContext } from "styled-components";
import { Config as Configuration } from "../../DevTools";
import { U, copy, map } from "../../../helpers";

import { Container, Header, List } from "./styles";
import { Add, Delete, Export } from "./styles/icons";

import Property from "./Property/Property";

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
  const { For } = useContext(ThemeContext);
  const { Remove } = For("DevTools");

  const toggle = (property: string) => (e: any) => {
    e.stopPropagation();
    toggleContextValue(name, property)();
  };

  const clipboard = useCallback(() => copy(data), [data]);

  const { open, addingProperty } = (contexts && contexts[name]) || {};

  const count = Object.entries(data || {})?.length + (addingProperty ? 2 : 1);

  return (
    <Container count={count} name={name} open={open}>
      <Header onClick={toggle("open")}>
        <Title>{name}</Title>
        {open && (
          <div onClick={e => e.stopPropagation()}>
            <Add rotate={addingProperty} onClick={toggle("addingProperty")} />
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
            <Property context={name} {...params} />
          ))}
          {addingProperty && <Property context={name} />}
        </List>
      )}
    </Container>
  );
}
