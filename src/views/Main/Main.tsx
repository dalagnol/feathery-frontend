import React from "react";
import { withRouter } from "react-router-dom";
import { useRerender } from "shared/hooks";

import { Background, Title, Button } from "./styles";

import Locale from "locale";
import Dictionary from "./locale.json";

import Theme from "themes";

const { welcome, aboutus, changethemeto } = Locale.use(Dictionary);

function Main({ history }: any) {
  const About = () => {
    history.push("/about");
  };

  const refresh = useRerender();
  const nextThemeName = Theme.next()
    .localised("name")
    .toLowerCase();
  const changeThemes = () => Theme.switch() && refresh();

  return (
    <Background {...Theme.d}>
      <Title {...Theme.d}>{welcome}</Title>
      <Button {...Theme.d} onClick={About}>
        {aboutus}
      </Button>
      <Button {...Theme.d} onClick={changeThemes}>
        {changethemeto} {nextThemeName}
      </Button>
    </Background>
  );
}

export default withRouter(Main);
