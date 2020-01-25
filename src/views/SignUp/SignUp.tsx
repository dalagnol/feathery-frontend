import React from "react";
import { Themed } from "themes";
import { useForm } from "utils/hooks";
import { withRouter } from "react-router-dom";

import { Header, Loader } from "components";
import Form from "./Form/Form";

export default withRouter(function SignUp() {
  const form = useForm({
    name: "",
    identifier: "",
    email: "",
    gender: "male",
    password: "",
  });

  return (
    <Themed>
      {false && <Loader />}
      <Header />
      <Form form={form} />
    </Themed>
  );
});
