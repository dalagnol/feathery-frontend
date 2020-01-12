import React from "react";
import { Themed } from "themes";
import { useForm } from "shared/hooks";
import { useDispatch } from "react-redux";

import { Creators as User } from "store/ducks/user";

import { Header } from "components";
import Form from "./Form/Form";

export default function SignIn() {
  const dispatch = useDispatch();

  const form = useForm({
    credential: "",
    password: "",
  });

  const submit = (form: any) => dispatch(User.login(form));

  return (
    <Themed>
      <Header />
      <Form form={form} submit={submit} />
    </Themed>
  );
}
