import React from "react";

import { Option as Element } from "./styles";

export default function Option({ children, ...props }: any) {
  return <Element {...props}>{children}</Element>;
}
