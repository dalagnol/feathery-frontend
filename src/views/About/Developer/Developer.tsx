import React from "react";

import {
  ImageContainer,
  CreatorContainer,
  TextContainer,
  Paragraph,
  Subheading,
  Image,
} from "./styles";

export default function Developer({ photo, name, description }: any) {
  return (
    <CreatorContainer>
      <ImageContainer>
        <Image src={photo} />
      </ImageContainer>
      <TextContainer>
        <Subheading>{name}</Subheading>
        <Paragraph>{description}</Paragraph>
      </TextContainer>
    </CreatorContainer>
  );
}
