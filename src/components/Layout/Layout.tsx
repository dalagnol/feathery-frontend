import React from "react";

import { Content } from "./styles";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
