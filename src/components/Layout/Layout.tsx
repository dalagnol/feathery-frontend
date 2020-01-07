import React from "react";

import { Background } from "./styles";

import Theme from "themes";

import { Footer, Navbar } from "components";

export default function Layout({ children }: any) {
  return (
    <Background {...Theme.d}>
      <Navbar />
      {children}
      <Footer />
    </Background>
  );
}
