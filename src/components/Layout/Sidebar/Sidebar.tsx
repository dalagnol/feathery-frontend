import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { useHistory } from "react-router-dom";

import {
  Container,
  LogoContainer,
  Sidebar as Element,
  Button,
  Buttons,
  FeedIcon,
  AboutUsIcon,
} from "./styles";

import { Logo } from "components";

const { feed, aboutus } = Locale.use(Dictionary);

export default function Sidebar({ sidebarOpen, setSidebarOpen }: any) {
  const history = useHistory();

  const CloseSidebar = () => {
    setSidebarOpen(false);
  };

  const GoToFeed = () => {
    history.push("/");
    setSidebarOpen(false);
  };

  return (
    <Container onClick={CloseSidebar} sidebarOpen={sidebarOpen}>
      <Element>
        <LogoContainer>
          <Logo onClick={CloseSidebar} />
        </LogoContainer>
        <Buttons onClick={GoToFeed}>
          <FeedIcon />
          <Button>{feed}</Button>
        </Buttons>
        <Buttons>
          <AboutUsIcon />
          <Button>{aboutus}</Button>
        </Buttons>
      </Element>
    </Container>
  );
}
