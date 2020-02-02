import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { useHistory } from "react-router-dom";
import { useExternalClick } from "utils/hooks";

import {
  Container,
  LogoContainer,
  Sidebar as Element,
  Text,
  Button,
  Buttons,
  FeedIcon,
  AboutUsIcon,
} from "./styles";

import { Logo } from "components";

export default function Sidebar({
  setSidebarOpen,
  sidebarOpen,
  closingSidebar,
}: any) {
  const { push } = useHistory();
  const { feed, aboutus } = Locale.use(Dictionary);

  const ref = useExternalClick(() => setSidebarOpen(false));

  const GoToFeed = () => {
    push("/");
    setSidebarOpen(false);
  };

  return (
    sidebarOpen && (
      <Container closing={closingSidebar}>
        <Element ref={ref} closing={closingSidebar} sidebarOpen={sidebarOpen}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Buttons>
            <Button onClick={GoToFeed}>
              <FeedIcon />
              <Text>{feed}</Text>
            </Button>
            <Button>
              <AboutUsIcon />
              <Text>{aboutus}</Text>
            </Button>
          </Buttons>
        </Element>
      </Container>
    )
  );
}
