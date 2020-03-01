import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
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
  const [open, setOpen] = useState(false);
  const [addingProperty, setAddingProperty] = useState(false);
  const [code, setCode] = useState("");
  const { Themes, For } = useContext(ThemeContext);
  const { Remove } = For("DevTools");

  const toggleAddingProperty = (e: any) => {
    e.stopPropagation();

    setAddingProperty(!addingProperty);
  };

  useEffect(() => {
    setAddingProperty(false);
  }, [Themes]);

  return (
    <Container open={open}>
      <Header onClick={() => setOpen(!open)}>
        <Title>{name}</Title>
        {open && (
          <div onClick={e => e.stopPropagation()}>
            <Add rotate={addingProperty} onClick={toggleAddingProperty} />
            <Export
              onClick={() => copy(JSON.stringify(data, null, 2))}
              onDoubleClick={() => setCode(JSON.stringify(data, null, 2))}
            />
            <Delete onClick={() => Remove(name)} />
          </div>
        )}
      </Header>

      {open && (
        <List>
          {Object.entries(data).map(
            ([key, value]: [string, any], index: number) => (
              <Property key={index} context={name} name={key} value={value} />
            )
          )}
          {addingProperty && <Property context={name} />}
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
