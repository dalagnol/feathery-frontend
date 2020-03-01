import React, { useState } from "react";
import { U } from "../../../helpers";

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
  const [open, setOpen] = useState(false);
  const [addingProperty, setAddingProperty] = useState(false);

  const toggleAddingProperty = (e: any) => {
    e.stopPropagation();

    setAddingProperty(!addingProperty);
  };

  return (
    <Container open={open}>
      <Header onClick={() => setOpen(!open)}>
        <Title>{name}</Title>
        {open && (
          <div>
            <Add rotate={addingProperty} onClick={toggleAddingProperty} />
            <Export />
            <Delete />
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
        </List>
      )}
    </Container>
  );
}
