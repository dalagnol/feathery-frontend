import React from "react";

import { Content } from "./styles";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout({ children, ...props }: any) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Content {...props}>{children}</Content>
      <Footer />
    </>
  );
}
