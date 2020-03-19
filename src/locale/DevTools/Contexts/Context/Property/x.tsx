import React, { useState, useContext } from "react";
import { Config as Configuration } from "../../../DevTools";
import { LocaleContext } from "../../../../useLocale";

import { Container, Input } from "./styles";

export default function Property({ context, data, value }: any) {
  const { toggleContextValue } = useContext(Configuration);
  const { Set } = useContext(LocaleContext);

  const [editing, setEditing] = useState(!value);

  const keyActions: {
    [x: number]: Function;
  } = {
    13: ({ key, val, name }: any) => {
      const string = Object.entries(data)[0];
      Set(key.current?.value || name, context, string);
    },
    27: ({ toggleContextValue, context }: any) =>
      toggleContextValue(context, "addingProperty", false)(),
  };

  return (
    <Container>
      <div>
        {(value && (
          <>
            <label>{value}</label>
          </>
        )) || <Input defaultValue={value} autoFocus={true} name={value} />}
      </div>
    </Container>
  );
}
