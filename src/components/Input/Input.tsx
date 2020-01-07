import React from "react";

import { Input as Element } from "./styles";

import Theme from "themes";

export default function Input(props: any) {
  return <Element {...Theme.d} {...props} />;
}
