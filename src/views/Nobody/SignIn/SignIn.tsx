import React from "react";
import { Themed } from "themes";
import { useForm, useAnimation, useService } from "utils/hooks";
import { withRouter } from "react-router-dom";
import { errors } from "./constants";

import { Header, Loader } from "components";
import Form from "./Form/Form";

import UserService from "services/Users";
import UserStore from "store/Users";

export default withRouter(function SignIn() {
  const [credError, credTrigger]: any = useAnimation(500);
  const [pswdError, pswdTrigger]: any = useAnimation(500);

  const form = useForm({
    credential: "",
    password: "",
  });

  const [, loading, authenticate] = useService({
    method: UserService.Authenticate,
    params: form,
    handler: (data: any) => {
      UserStore.user = data;
    },
    errors: errors(credTrigger, pswdTrigger),
  });

  return (
    <Themed>
      {loading && <Loader />}
      <Header />
      <Form
        form={form}
        errors={{ credError, pswdError }}
        submit={authenticate}
      />
    </Themed>
  );
});
