import React from "react";

import { Button as Element } from "./styles";

import Theme from "themes";

export default function Button({ children, ...props }: any) {
  return (
    <Element {...Theme.d} {...props}>
      {children}
    </Element>
  );
}
