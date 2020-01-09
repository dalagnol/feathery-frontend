import React from "react";

import { Background as Element } from "./styles";

export default function Background({ children, ...props }: any) {
  return <Element {...props}>{children}</Element>;
}
