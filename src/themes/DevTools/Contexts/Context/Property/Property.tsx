import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Config as Configuration } from "../../../DevTools";

import { Container, Delete, Input } from "./styles";

interface Props {
  context: string;
  name?: string;
  value?: string;
}

const valActions: {
  [x: number]: Function;
} = {
  13: ({ Set, context, key, val, name, setEditing }: any) => {
    Set(context, key.current?.value || name, val.current?.value);
    try {
      key.current.value = "";
      val.current.value = "";
      key.current.focus();
    } catch (oof) {
      setEditing(false);
    }
  },
  27: ({ toggleContextValue, context }: any) =>
    toggleContextValue(context, "addingProperty", false)(),
};

const keyActions: {
  [x: number]: Function;
} = {
  13: (params: any) => {
    const { e, val } = params;

    const {
      target: { value },
    } = e;

    if (e.target.value.includes(":")) {
      e.target.value = value.split(":")[0].trim();
      val.current.value = value
        .split(":")[1]
        .trim()
        .replace(/;/g, "");
      valActions[13](params);
    } else {
      val.current?.focus();
    }
  },
  27: ({ toggleContextValue, context }: any) =>
    toggleContextValue(context, "addingProperty", false)(),
};

export default function Property({ context, name, value }: Props) {
  const { For } = useContext(ThemeContext);
  const { toggleContextValue } = useContext(Configuration);
  const { Set, Unset } = For("DevTools");

  const key: any = useRef(null);
  const val: any = useRef(null);

  const [editing, setEditing] = useState(!name);

  const handlerParams = {
    Set,
    context,
    name,
    key,
    val,
    setEditing,
    toggleContextValue,
  };

  const keyHandler = (e: any) =>
    keyActions[e.keyCode] && keyActions[e.keyCode]({ e, ...handlerParams });

  const valHandler = (e: any) =>
    valActions[e.keyCode] && valActions[e.keyCode]({ e, ...handlerParams });

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
            onKeyUp={keyHandler}
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
            onKeyUp={valHandler}
            name="value"
            align={"right"}
          />
        )}
      </div>
    </Container>
  );
}
