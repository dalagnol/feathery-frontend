import React from "react";

import { Text } from "./styles";

import { Footer as Element } from "./styles";

import Theme from "themes";

export default function Footer() {
  return (
    <Element {...Theme.d}>
      <Text {...Theme.d}>Ⓒ2020 Feathery</Text>
    </Element>
  );
}
