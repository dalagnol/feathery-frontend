import React from "react";
import { withRouter } from "react-router-dom";
import { useRerender } from "shared/hooks";
import Theme, { Themed } from "themes";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Buttons, Text } from "./styles";

import { Button, Layout, Title } from "components";
import SelectLanguage from "./SelectLanguage/SelectLanguage";

function Landing({ history }: any) {
  const { welcome, aboutus, changethemeto, noposts } = Locale.use(Dictionary);
  const refresh = useRerender();

  const About = () => {
    history.push("/about");
  };

  const nextThemeName = Theme.next()
    .localised("name")
    .toLowerCase();
  const changeThemes = () => {
    Theme.switch();
    refresh();
  };

  const onChangeHandler = (e: any) => {
    const {
      target: { value },
    } = e;
    Locale.language = value;
    refresh();
  };

  return (
    <Themed>
      <Layout>
        <Title>{welcome}</Title>
        <Buttons>
          <Button onClick={About}>{aboutus}</Button>
          <Button onClick={changeThemes}>
            {changethemeto} {nextThemeName}
          </Button>
          <SelectLanguage onChangeHandler={onChangeHandler} />
        </Buttons>
        <Text>{noposts}</Text>
      </Layout>
    </Themed>
  );
}

export default withRouter(Landing);
