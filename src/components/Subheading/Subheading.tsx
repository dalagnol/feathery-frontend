import React from "react";

import { Subheading as Element } from "./styles";

import Theme from "themes";

export default function Subheading({ children, ...props }: any) {
  return (
    <Element {...Theme.d} {...props}>
      {children}
    </Element>
  );
}
