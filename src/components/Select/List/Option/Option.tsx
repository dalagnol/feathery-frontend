import React from "react";

import { Container } from "./styles";

export default function Component({ children, value }: Option) {
  return <Container>{children}</Container>;
}
