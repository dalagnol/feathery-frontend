import React from "react";
import { withRouter } from "react-router-dom";
import { useRerender } from "shared/hooks";

import { Background } from "./styles";

import Locale from "locale";
import Dictionary from "./locale.json";

import Theme from "themes";

import { Button, Logo, Title } from "components";

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
      <Logo />
      <Title>{welcome}</Title>
      <Button onClick={About}>{aboutus}</Button>
      <Button onClick={changeThemes}>
        {changethemeto} {nextThemeName}
      </Button>
    </Background>
  );
}

export default withRouter(Main);
