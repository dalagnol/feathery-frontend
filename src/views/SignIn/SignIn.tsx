import React, { useEffect } from "react";
import { Themed } from "themes";
import { useForm } from "shared/hooks";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import { Creators as User } from "store/ducks/user";

import { Header } from "components";
import Form from "./Form/Form";

export default withRouter(function SignIn({ history }: any) {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.data);

  const form = useForm({
    credential: "",
    password: "",
  });

  const submit = (form: any) => dispatch(User.login(form));

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  return (
    <Themed>
      <Header />
      <Form form={form} submit={submit} />
    </Themed>
  );
});
