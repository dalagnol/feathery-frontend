import React from "react";

import {
  Container,
  TextConatiner,
  Paragraph,
  Subheading,
  Image,
} from "./styles";

import Dictionary from "./locale.json";
import Locale from "locale";

import Theme from "themes";

const { aboutmorezco, aboutdalagnol } = Locale.use(Dictionary);

export default function AboutCreators() {
  return (
    <div>
      <Container {...Theme.d}>
        <Image
          src={"https://avatars0.githubusercontent.com/u/34279299?s=460&v=4"}
        />
        <TextConatiner>
          <Subheading {...Theme.d}>Morezco</Subheading>
          <Paragraph {...Theme.d}>{aboutmorezco}</Paragraph>
        </TextConatiner>
      </Container>
      <Container {...Theme.d}>
        <Image
          src={"https://avatars3.githubusercontent.com/u/49122688?s=460&v=4"}
        />
        <TextConatiner>
          <Subheading {...Theme.d}>Dalagnol</Subheading>
          <Paragraph {...Theme.d}>{aboutdalagnol}</Paragraph>
        </TextConatiner>
      </Container>
    </div>
  );
}
