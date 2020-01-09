import React, { useState } from "react";
import { Themed } from "themes";

import { Header } from "components";
import Form from "./Form/Form";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <Themed>
      <Header />
      <Form form={form} setForm={setForm} />
    </Themed>
  );
}
