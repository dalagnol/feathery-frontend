import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { useHistory } from "react-router-dom";

import {
  Container,
  LogoContainer,
  Sidebar as Element,
  Text,
  Button,
  FeedIcon,
  AboutUsIcon,
} from "./styles";

import { Logo } from "components";

const { feed, aboutus } = Locale.use(Dictionary);

export default function Sidebar({
  setSidebarOpen,
  sidebarOpen,
  closingSidebar,
}: any) {
  const history = useHistory();

  const CloseSidebar = () => {
    setSidebarOpen(false);
  };

  const GoToFeed = () => {
    history.push("/");
    setSidebarOpen(false);
  };

  return (
    sidebarOpen && (
      <Container closing={closingSidebar} onClick={CloseSidebar}>
        <Element closing={closingSidebar} sidebarOpen={sidebarOpen}>
          <LogoContainer>
            <Logo onClick={CloseSidebar} />
          </LogoContainer>
          <Button onClick={GoToFeed}>
            <FeedIcon />
            <Text>{feed}</Text>
          </Button>
          <Button>
            <AboutUsIcon />
            <Text>{aboutus}</Text>
          </Button>
        </Element>
      </Container>
    )
  );
}
