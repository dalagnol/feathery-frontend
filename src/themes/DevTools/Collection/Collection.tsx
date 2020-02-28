import React, { useState, useContext } from "react";
import { TrashAlt, Plus } from "styled-icons/boxicons-regular";
import { TimesCircle } from "styled-icons/fa-regular/TimesCircle";
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

  const [adding, setAdding] = useState(false);
  const { Set, Remove } = useContext(ThemeContext);

  const [property, setProperty] = useState({});

  const handler = (e: any) => {
    const {
      target: { name, value },
    } = e;

    if (name === "key") {
      setProperty({ [value]: Object.values(property)[0] || "" });
    } else {
      setProperty({ [Object.keys(property)[0]]: value });
    }
  };

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
          <Plus size={22} onClick={() => setAdding(!adding)} />
          <TrashAlt
            size={22}
            onClick={() => Remove(title.toLowerCase(), "DevTools")}
          />
        </div>
      </div>

      {Object.entries(data).map(
        ([key, value]: [string, any], index: number) => (
          <div key={index}>
            <b onClick={() => Set(title.toLowerCase(), key, undefined)}>
              <TimesCircle size={12} /> {key}
            </b>
            <Value
              component={title.toLowerCase()}
              property={key}
              initial={value}
            />
          </div>
        )
      )}
      {adding && (
        <div>
          <input
            onClick={e => e.stopPropagation()}
            name="key"
            value={String(Object.keys(property)[0] || "")}
            onChange={handler}
            style={{ textAlign: "left", textIndent: "0.2em" }}
            autoFocus={true}
          />
          <input
            onClick={e => e.stopPropagation()}
            name="value"
            value={String(Object.values(property)[0] || "")}
            onChange={handler}
            onKeyDown={(e: any) => {
              if (e.keyCode === 13) {
                Set(
                  title.toLowerCase(),
                  String(Object.keys(property)[0] || ""),
                  String(Object.values(property)[0] || "")
                );

                setProperty({});
                setAdding(false);
              }
            }}
          />
        </div>
      )}
    </Container>
  );
}
