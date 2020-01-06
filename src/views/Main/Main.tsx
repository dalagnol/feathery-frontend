import React from "react";
import { withRouter } from "react-router-dom";
import { useRerender } from "shared/hooks";

import { Background, ButtonContainer } from "./styles";

import Locale from "locale";
import Dictionary from "./locale.json";

import Theme from "themes";

import { Button, Container, Logo, Title } from "components";

const { welcome, aboutus, changethemeto } = Locale.use(Dictionary);

function Main({ history }: any) {
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
      <Container {...Theme.d}>
        <Logo />
        <Title>{welcome}</Title>
      </Container>
      <ButtonContainer {...Theme.d}>
        <Button onClick={About}>{aboutus}</Button>
        <Button onClick={changeThemes}>
          {changethemeto} {nextThemeName}
        </Button>
      </ButtonContainer>
    </Background>
  );
}

export default withRouter(Main);
