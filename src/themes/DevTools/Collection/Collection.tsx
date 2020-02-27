import React, { useState, useContext } from "react";
import { TrashAlt, Plus } from "styled-icons/boxicons-regular";
import { ThemeContext } from "styled-components";

import { Container, Title } from "../styles/Collection";

import Value from "./Value/Value";

export default function({
  title,
  data,
  addSection,
  removeSection,
  initialOpen,
}: any) {
  const [open, _setOpen] = useState(initialOpen);
  const { Remove } = useContext(ThemeContext);

  const setOpen = (state: boolean) => {
    if (state) addSection(title);
    else removeSection(title);

    _setOpen(state);
  };

  return (
    <Container open={open}>
      <div className={"Subheader"}>
        <Title {...data} onClick={() => setOpen(!open)}>
          <span>{"<"}</span>
          {title}
          <span>{" />"}</span>
        </Title>

        <div>
          <Plus
            size={22}
            onClick={() => Remove(title.toLowerCase(), "DevTools")}
          />
          <TrashAlt
            size={22}
            onClick={() => Remove(title.toLowerCase(), "DevTools")}
          />
        </div>
      </div>

      {Object.entries(data).map(
        ([key, value]: [string, any], index: number) => (
          <div key={index}>
            <b>{key}</b>
            <Value
              component={title.toLowerCase()}
              property={key}
              initial={value}
            />
          </div>
        )
      )}
    </Container>
  );
}
