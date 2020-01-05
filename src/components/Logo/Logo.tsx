import React from "react";

import { Image } from "./styles";

import { Logo as logo } from "assets";

import Theme from "themes";

export default function Logo(props: any) {
  return <Image src={logo[Theme.theme]} {...props} />;
}
