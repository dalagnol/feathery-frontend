import React from "react";

import { Container as Element } from "./styles";

import Theme from "themes";

export default function Container(props: any) {
  return <Element {...Theme.d} {...props} />;
}
