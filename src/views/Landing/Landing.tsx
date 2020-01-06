import React from "react";
import { withRouter } from "react-router-dom";
import { useRerender } from "shared/hooks";

import { Background, ButtonContainer, Text } from "./styles";

import Locale from "locale";
import Dictionary from "./locale.json";

import Theme from "themes";

import { Button, Container, Navbar, Title } from "components";

const { welcome, aboutus, changethemeto, noposts } = Locale.use(Dictionary);

function Landing({ history }: any) {
  const About = () => {
    history.push("/about");
  };

  const refresh = useRerender();
  const changeThemes = () => Theme.switch() && refresh();
  const nextThemeName = Theme.next()
    .localised("name")
    .toLowerCase();

  return (
    <Background {...Theme.d}>
      <Navbar />
      <Container {...Theme.d}>
        <Title>{welcome}</Title>
      </Container>
      <ButtonContainer {...Theme.d}>
        <Button onClick={About}>{aboutus}</Button>
        <Button onClick={changeThemes}>
          {changethemeto} {nextThemeName}
        </Button>
      </ButtonContainer>
      <Text {...Theme.d}>{noposts}</Text>
    </Background>
  );
}

export default withRouter(Landing);
