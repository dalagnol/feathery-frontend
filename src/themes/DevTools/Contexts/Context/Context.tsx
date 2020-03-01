import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Config as Configuration } from "../../DevTools";
import { U, copy } from "../../../helpers";

import { Container, Header, List, Code } from "./styles";
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
  const Config = useContext(Configuration);
  const [code, setCode] = useState("");
  const { For } = useContext(ThemeContext);
  const { Remove } = For("DevTools");

  const toggleAddingProperty = (e: any) => {
    e.stopPropagation();

    Config.toggleContextValue(name, "addingProperty")();
  };

  return (
    <Container open={Config.contexts[name]?.open}>
      <Header onClick={Config.toggleContextValue(name, "open")}>
        <Title>{name}</Title>
        {Config.contexts[name]?.open && (
          <div onClick={e => e.stopPropagation()}>
            <Add
              rotate={Config.contexts[name]?.addingProperty}
              onClick={toggleAddingProperty}
            />
            <Export
              onClick={() => copy(JSON.stringify(data, null, 2))}
              onDoubleClick={() => setCode(JSON.stringify(data, null, 2))}
            />
            <Delete onClick={() => Remove(name)} />
          </div>
        )}
      </Header>

      {Config.contexts[name]?.open && (
        <List>
          {data &&
            Object.entries(
              data
            ).map(([key, value]: [string, any], index: number) => (
              <Property key={index} context={name} name={key} value={value} />
            ))}
          {Config.contexts[name]?.addingProperty && <Property context={name} />}
        </List>
      )}
      {code && (
        <Code onDoubleClick={() => setCode("")}>
          <p>{code}</p>
        </Code>
      )}
    </Container>
  );
}
