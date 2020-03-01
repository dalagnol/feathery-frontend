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
  const { Set, Unset } = For("DevTools");

  const key: any = useRef(null);
  const val: any = useRef(null);

  const [editing, setEditing] = useState(!name);

  const handler = (e: any) => {
    if (e.keyCode === 13) {
      if (e.target.name === "key") {
        val.current?.focus();
      } else {
        Set(context, key.current?.value || name, val.current?.value);
      }
    }
  };

  return (
    <Container>
      <div>
        {(name && (
          <>
            <Delete onClick={() => Unset(context, name, value)} />
            <label>{name}</label>
          </>
        )) || (
          <Input
            ref={key}
            defaultValue={name}
            autoFocus={true}
            onKeyUp={handler}
            name="key"
          />
        )}
      </div>
      <div>
        {(!editing && (
          <p
            onDoubleClick={() => {
              setEditing(true);
              setTimeout(() => {
                val.current?.focus();
              }, 200);
            }}
          >
            {value}
          </p>
        )) || (
          <Input
            autoFocus={!key}
            ref={val}
            defaultValue={value}
            onKeyUp={handler}
            name="value"
            align={"right"}
          />
        )}
      </div>
    </Container>
  );
}
