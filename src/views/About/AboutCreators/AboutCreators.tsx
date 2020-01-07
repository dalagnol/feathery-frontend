import React from "react";

import {
  CreatorContainer,
  TextContainer,
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
    <>
      <CreatorContainer {...Theme.d}>
        <Image
          src={"https://avatars0.githubusercontent.com/u/34279299?s=460&v=4"}
        />
        <TextContainer>
          <Subheading {...Theme.d}>Morezco</Subheading>
          <Paragraph {...Theme.d}>{aboutmorezco}</Paragraph>
        </TextContainer>
      </CreatorContainer>
      <CreatorContainer {...Theme.d}>
        <Image
          src={"https://avatars3.githubusercontent.com/u/49122688?s=460&v=4"}
        />
        <TextContainer>
          <Subheading {...Theme.d}>Dalagnol</Subheading>
          <Paragraph {...Theme.d}>{aboutdalagnol}</Paragraph>
        </TextContainer>
      </CreatorContainer>
    </>
  );
}
