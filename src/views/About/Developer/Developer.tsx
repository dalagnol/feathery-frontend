import React from "react";

import {
  Images,
  Container,
  Texts,
  Paragraph,
  Subheading,
  Image,
} from "./styles";

export default function Developer({ photo, name, description }: any) {
  return (
    <Container>
      <Images>
        <Image src={photo} />
      </Images>
      <Texts>
        <Subheading>{name}</Subheading>
        <Paragraph>{description}</Paragraph>
      </Texts>
    </Container>
  );
}
