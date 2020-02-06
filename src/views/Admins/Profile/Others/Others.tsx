import React from "react";

import { Container, Header, UserPictureContainer, Text, EmailIcon, PhoneIcon, Main, Bio, Info } from "./styles";

import { Title, UserPicture } from "components";

import Store from "store/Users";

export default function Others() {
  const { user } = Store;

  return (
    <Container>
      <Header>
        <UserPictureContainer>
          <UserPicture src={user.picture} />
        </UserPictureContainer>
        <Title>{user.name}</Title>
        <Text>@{user.identifier}</Text>
      </Header>
      <Main>
        <Bio>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.</Text>
        </Bio>
        <Info>
          <EmailIcon />
          <PhoneIcon />
        </Info>
      </Main>
    </Container>
  );
}
