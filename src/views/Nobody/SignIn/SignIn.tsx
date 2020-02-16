import React from "react";
import { Themed } from "themes";
import { useForm, useTimer } from "utils/hooks";
import { withRouter } from "react-router-dom";

import { Header, Loader } from "components";
import Form from "./Form/Form";

import UserService from "services/Users";
import UserStore from "store/Users";

export default withRouter(function SignIn() {
  const cred: any = useTimer(500);
  const pswd: any = useTimer(500);

  const [data, { form, submit, loading }] = useForm(
    {
      credential: {
        autoFocus: "on",
        shake: cred[0],
      },
      password: {
        type: "password",
        shake: pswd[0],
      },
    },
    {
      service: UserService.Authenticate,
      onSuccess(data) {
        UserStore.user = data;
      },
      errors: {
        "email,identifier,credential,user": cred[1],
        password: pswd[1],
      },
    }
  );

  return (
    <Themed>
      {loading && <Loader />}
      <Header />
      <Form
        form={[data, form]}
        errors={{ credError: cred[0], pswdError: pswd[0] }}
        submit={submit}
      />
    </Themed>
  );
});
