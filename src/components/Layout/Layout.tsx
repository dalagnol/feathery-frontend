import React from "react";

import { Content } from "./styles";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout({ children, ...props }: any) {
  return (
    <>
      <Navbar />
      <Content {...props}>{children}</Content>
      <Footer />
    </>
  );
}
