import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { Background, Title, Button } from "./styles";

import Dictionary from "./locale.json";
import Locale from "locale";
import Theme from "themes";

import Test from "services/TestService";

const { aboutus, main } = Locale.use(Dictionary);

export default withRouter(function About({ history }) {
  const [loaded, setLoaded] = useState("");
  const Main = () => history.push("/");

  const Ping = async () => {
    setLoaded("");
    const pingResponse = await Test.ping();
    setLoaded(pingResponse);
  };

  return (
    <Background {...Theme.d}>
      <Title {...Theme.d}>{aboutus}</Title>
      <Title {...Theme.d}>{loaded}</Title>
      <Button {...Theme.d} onClick={Main}>
        {main}
      </Button>
    </Background>
  );
});
