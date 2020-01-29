import React from "react";

import { Text, Footer as Element } from "./styles";

export default function Footer({ sidebarOpen }: any) {
  return (
    <Element sidebarOpen={sidebarOpen}>
      <Text>Ⓒ2020 Feathery</Text>
    </Element>
  );
}
