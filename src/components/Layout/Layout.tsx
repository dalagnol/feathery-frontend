import React from "react";

import { Background, Content } from "./styles";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout({ children }: any) {
  return (
    <Background>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Background>
  );
}
