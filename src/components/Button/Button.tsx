import React from "react";

import { Button as Element } from "./styles";

export default function Button({ children, ...props }: any) {
  return <Element {...props}>{children}</Element>;
}
