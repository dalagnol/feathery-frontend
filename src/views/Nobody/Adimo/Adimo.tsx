import React from "react";
import { Themed } from "themes";

import useForm from "utils/hooks/useForm";

import { Layout, Input, Button } from "components";

export default function Adimo() {
  const [form, { validate }] = useForm({
    name: {
      placeholder: "Nome",
      value: "Adimo potestas",
      validation: ({ value }: any) =>
        value.length < 10 && "Names must be at least 10 characters long",
    },
  });

  return (
    <Themed>
      <Layout row around>
        <Input {...form.name.props} />
        <p>{form.name.error}</p>
        <Button onClick={validate}>Submit</Button>
      </Layout>
    </Themed>
  );
}
