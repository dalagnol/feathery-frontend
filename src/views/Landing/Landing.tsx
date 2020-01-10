import React from "react";
import { withRouter } from "react-router-dom";
import { useRerender } from "shared/hooks";
import Theme, { Themed } from "themes";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Buttons, Text } from "./styles";

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
        <Buttons>
          <Button onClick={About}>{aboutus}</Button>
          <Button onClick={changeThemes}>
            {changethemeto} {nextThemeName}
          </Button>
        </Buttons>
        <Text>{noposts}</Text>
      </Layout>
    </Themed>
  );
}

export default withRouter(Landing);
