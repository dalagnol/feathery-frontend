import React from "react";

import { Subheading as Element } from "./styles";

export default function Subheading({ children, ...props }: any) {
  return <Element {...props}>{children}</Element>;
}
