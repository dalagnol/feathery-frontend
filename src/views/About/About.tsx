import React from "react";
import { withRouter } from "react-router-dom";
//import { useService } from "shared/hooks";

import { Background, Paragraph } from "./styles";

import Dictionary from "./locale.json";
import Locale from "locale";

import Theme from "themes";

//import Test from "services/TestService";

import { Button, Footer, Navbar, Subheading, Title } from "components";
import AboutCreators from "./AboutCreators/AboutCreators";

const { aboutus, main, aboutfeathery, creators, aboutcreators } = Locale.use(
  Dictionary
);

export default withRouter(function About({ history }) {
  const Main = () => history.push("/");

  //const ping = useService(Test.ping);

  return (
    <Background {...Theme.d}>
      <Navbar />
      <Title>{aboutus}</Title>
      <Paragraph {...Theme.d}>{aboutfeathery}</Paragraph>
      <Subheading style={{ width: "80vw" }}>{creators}</Subheading>
      <Paragraph {...Theme.d}>{aboutcreators}</Paragraph>
      <AboutCreators />
      <Button onClick={Main}>{main}</Button>
      <Footer />
    </Background>
  );
});
