import React from "react";

import { Background, Content } from "./styles";

import Theme from "themes";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout({ children }: any) {
  return (
    <Background {...Theme.d}>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Background>
  );
}
