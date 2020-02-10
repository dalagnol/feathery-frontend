import React from "react";
import { Themed } from "themes";
import { useForm, useTimer, useService } from "utils/hooks";
import { withRouter } from "react-router-dom";
import { errors } from "./constants";

import { Header, Loader } from "components";
import Form from "./Form/Form";

import UserService from "services/Users";
import UserStore from "store/Users";

export default withRouter(function SignUp() {
  const [nameError, nameTrigger]: any = useTimer(500);
  const [idtfError, idtfTrigger]: any = useTimer(500);
  const [mailError, mailTrigger]: any = useTimer(500);
  const [pswdError, pswdTrigger]: any = useTimer(500);

  const form = useForm(
    {
      name: "",
      identifier: "",
      email: "",
      gender: "male",
      password: "",
    },
    { no$: true }
  );

  const [, loading, register] = useService({
    method: UserService.Register,
    params: form,
    handler: (data: any) => {
      UserStore.user = data;
    },
    errors: errors(nameTrigger, idtfTrigger, mailTrigger, pswdTrigger),
  });

  return (
    <Themed>
      {loading && <Loader />}
      <Header />
      <Form
        form={form}
        errors={{ nameError, idtfError, mailError, pswdError }}
        submit={register}
      />
    </Themed>
  );
});
