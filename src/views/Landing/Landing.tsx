import React from "react";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { useRerender } from "shared/hooks";
import Theme, { Themed } from "themes";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Buttons, Text } from "./styles";

import { Button, Layout, Title, Loader } from "components";

import Users from "store/Users";

export default observer(function Landing() {
  const { welcome, aboutus, changethemeto, noposts } = Locale.use(Dictionary);
  const history = useHistory();
  const refresh = useRerender();

  const { user } = Users;

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

  return (
    <Themed>
      <Layout>
        <Title>{welcome}</Title>
        {user ? <Title>{user}</Title> : <Loader />}
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
});
