import React from "react";
import { withRouter } from "react-router-dom";

import { Background, Title, Button } from "./styles";

import Dictionary from "./locale.json";
import Locale from "locale";

const { welcome, aboutus } = Locale.use(Dictionary);

function Main({ history }: any) {
  const about = () => {
    history.push("/about");
  };

  return (
    <Background>
      <Title>{welcome}</Title>
      <Button onClick={about}>{aboutus}</Button>
    </Background>
  );
}

export default withRouter(Main);
