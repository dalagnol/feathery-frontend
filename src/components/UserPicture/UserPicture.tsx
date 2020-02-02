import React from "react";
import { observer } from "mobx-react";

import { Container, Image } from "./styles";
import { User } from "styled-icons/evil";

import Store from "store/Users";

export default observer(function UserPicture({ ...props }: any) {
  return (
    (Store.user.picture && (
      <Container>
        <Image {...props} src={Store.user.picture} />
      </Container>
    )) || <User style={{ width: "100%" }} />
  );
});
