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

const { feed, aboutus } = Locale.use(Dictionary);

export default function Sidebar({
  setSidebarOpen,
  sidebarOpen,
  closingSidebar,
}: any) {
  const history = useHistory();

  const ref = useExternalClick(() => setSidebarOpen(false));

  const CloseSidebar = () => {
    setSidebarOpen(false);
  };

  const GoToFeed = () => {
    history.push("/");
    setSidebarOpen(false);
  };

  return (
    sidebarOpen && (
      <Container closing={closingSidebar}>
        <Element ref={ref} closing={closingSidebar} sidebarOpen={sidebarOpen}>
          <LogoContainer>
            <Logo onClick={CloseSidebar} />
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
