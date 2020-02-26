import React, { useState } from "react";

import { Container } from "../styles/Collection";

import Value from "./Value/Value";

export default function({ title, data, initialOpen }: any) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <Container open={open}>
      <h2 onClick={() => setOpen(!open)}>{title}</h2>
      {Object.entries(data).map(
        ([key, value]: [string, any], index: number) => (
          <div key={index}>
            <b>{key}</b>
            <Value component={title} property={key} initial={value} />
          </div>
        )
      )}
    </Container>
  );
}