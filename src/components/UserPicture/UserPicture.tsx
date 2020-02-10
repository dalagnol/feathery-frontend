import React from "react";
import { observer } from "mobx-react";

import { Container, Image, UserIcon } from "./styles";

import Store from "store/Users";

export default observer(function UserPicture({ ...props }: any) {
  return (
    (Store.user.picture && (
      <Container>
        <Image {...props} src={props.src || Store.user.picture} />
      </Container>
    )) || <UserIcon />
  );
});
