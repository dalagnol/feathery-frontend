import React, { useState, useContext } from "react";
import { Config as Configuration } from "../../../DevTools";
import { LocaleContext } from "../../../../useLocale";

import { Container, Input } from "./styles";

const keyActions: {
  [x: number]: Function;
} = {
  13: ({ Set, name, data, context, toggleContextValue, e }: any) => {
    const string = Object.values(data)[0];

    Set(e.target.value || name, context, string || name);
    toggleContextValue(context, "editing", false)();
  },
  27: ({ toggleContextValue, context }: any) =>
    toggleContextValue(context, "editing", false)(),
};

export default function Property({ context, data, name, value, editing }: any) {
  const { toggleContextValue } = useContext(Configuration);
  const { Set } = useContext(LocaleContext);

  const handlerParams = {
    Set,
    context,
    name,
    data,
    toggleContextValue,
  };

  const keyHandler = (e: any) =>
    keyActions[e.keyCode] && keyActions[e.keyCode]({ e, ...handlerParams });

  return (
    <Container>
      <div>
        {editing ? (
          <Input
            defaultValue={value}
            autoFocus={true}
            name={value}
            onKeyUp={keyHandler}
          />
        ) : (
          <>
            <label>{value}</label>
          </>
        )}
      </div>
    </Container>
  );
}
