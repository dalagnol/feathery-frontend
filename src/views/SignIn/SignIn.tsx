import React from "react";
import { Themed } from "themes";
import { useForm, useService } from "utils/hooks";
import { withRouter } from "react-router-dom";

import { Header, Loader } from "components";
import Form from "./Form/Form";

export default withRouter(function SignIn() {
  const form = useForm({
    credential: "",
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
