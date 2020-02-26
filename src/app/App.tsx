import React, { useContext } from "react";
import { Context as ThemeContext, Theme } from "themes";

import { Palette, Playground, Container, ThemeTest } from "./styles";

export const App = () => {
  Theme("app", Palette);

  const Context = useContext(ThemeContext);
  console.log(Context);

  return (
    <Playground>
      <Container>
        <ThemeTest onClick={Context.Switch} />
      </Container>
    </Playground>
  );
};
