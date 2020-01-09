import React from "react";

import { Title as Element } from "./styles";

export default function Title({ children, ...props }: any) {
  return <Element {...props}>{children}</Element>;
}
