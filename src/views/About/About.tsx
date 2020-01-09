import React from "react";
import { withRouter } from "react-router-dom";
//import { useService } from "shared/hooks";

import { Paragraph, Subheading } from "./styles";

import Dictionary from "./locale.json";
import Locale from "locale";

import { Themed } from "themes";

//import Test from "services/TestService";

import { Button, Layout, Title } from "components";
import Developer from "./Developer/Developer";

const {
  aboutus,
  main,
  aboutfeathery,
  creators,
  aboutcreators,
  aboutmorezco,
  aboutdalagnol,
} = Locale.use(Dictionary);

const morezco = "https://avatars0.githubusercontent.com/u/34279299?s=460&v=4";
const dalagnol = "https://avatars3.githubusercontent.com/u/49122688?s=460&v=4";

export default withRouter(function About({ history }) {
  const Main = () => history.push("/");

  //const ping = useService(Test.ping);

  return (
    <Themed>
      <Layout>
        <Title>{aboutus}</Title>
        <Paragraph>{aboutfeathery}</Paragraph>
        <Subheading>{creators}</Subheading>
        <Paragraph>{aboutcreators}</Paragraph>
        <Developer
          photo={morezco}
          name={"Morezco"}
          description={aboutmorezco}
        />
        <Developer
          photo={dalagnol}
          name={"Dalagnol"}
          description={aboutdalagnol}
        />
        <Button onClick={Main}>{main}</Button>
      </Layout>
    </Themed>
  );
});
