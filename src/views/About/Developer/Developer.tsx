import React from "react";

import {
  CreatorContainer,
  TextContainer,
  Paragraph,
  Subheading,
  Image,
} from "./styles";

import Theme from "themes";

export default function Developer({ photo, name, description }: any) {
  return (
      <CreatorContainer {...Theme.d}>
        <Image
          src={photo}
        />
        <TextContainer>
          <Subheading {...Theme.d}>{name}</Subheading>
          <Paragraph {...Theme.d}>{description}</Paragraph>
        </TextContainer>
      </CreatorContainer>
  );
}
