import React from "react";
import { withRouter } from "react-router-dom";
import { useRerender } from "shared/hooks";

import { ButtonContainer, Text } from "./styles";

import Locale from "locale";
import Dictionary from "./locale.json";

import Theme, { Themed } from "themes";

import { Button, Layout, Title } from "components";

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
    <Themed>
      <Layout>
        <Title>{welcome}</Title>
        <ButtonContainer {...Theme.d}>
          <Button onClick={About}>{aboutus}</Button>
          <Button onClick={changeThemes}>
            {changethemeto} {nextThemeName}
          </Button>
        </ButtonContainer>
        <Text {...Theme.d}>{noposts}</Text>
      </Layout>
    </Themed>
  );
}

export default withRouter(Landing);
