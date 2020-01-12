import React from "react";

import { Overlay as Element } from "./styles";

export default function Overlay({ children, ...props }: any) {
  return <Element {...props}>{children}</Element>;
}
