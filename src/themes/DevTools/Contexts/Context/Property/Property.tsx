import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container, Delete, Input } from "./styles";

interface Props {
  context: string;
  name?: string;
  value?: string;
}

export default function Property({ context, name, value }: Props) {
  const { For } = useContext(ThemeContext);
  const { Unset } = For("DevTools");

  const ref: any = useRef(null);

  const [editing, setEditing] = useState(true);

  const handler = (name: string) => (e: any) => {
    const {
      target: { value },
    } = e;

    if (e.keyCode === 13) {
      if (name === "key") {
      } else {
      }
    }
  };

  return (
    <Container>
      <div>
        {(name && (
          <>
            <Delete onClick={() => Unset(context, name, value)} />
            <p>{name}</p>{" "}
          </>
        )) || <Input />}
      </div>
      <div>{(!editing && <p>{value}</p>) || <Input align={"right"} />}</div>
    </Container>
  );
}
