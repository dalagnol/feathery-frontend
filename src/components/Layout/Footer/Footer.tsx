import React from "react";

import { Text, Footer as Element } from "./styles";

export default function Footer(props: any) {
  return (
    <Element {...props}>
      <Text>Ⓒ2020 Feathery</Text>
    </Element>
  );
}
