import React from "react";

import { Title as Element } from "./styles";

import Theme from "themes";

export default function Title({ children, ...props }: any) {
  return (
    <Element {...Theme.d} {...props}>
      {children}
    </Element>
  );
}
