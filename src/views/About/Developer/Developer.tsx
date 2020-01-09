import React from "react";

import {
  ImageContainer,
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
      <ImageContainer>
        <Image src={photo} />
      </ImageContainer>
      <TextContainer>
        <Subheading {...Theme.d}>{name}</Subheading>
        <Paragraph {...Theme.d}>{description}</Paragraph>
      </TextContainer>
    </CreatorContainer>
  );
}
