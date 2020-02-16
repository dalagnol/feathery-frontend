import React from "react";
import { Themed } from "themes";

import useForm, { UseFormModifierParams } from "utils/hooks/useForm";
import { stoi } from "utils/helpers";

import { Layout, Input } from "components";

export default function Adimo() {
  const [{ name }] = useForm({
    name: {
      placeholder: "Nome",
      modifier: ({ value }: UseFormModifierParams) => {
        const x = stoi(value);
        return x > 0 && x < 31 ? x : "";
      },
    },
  });

  console.log(name);

  return (
    <Themed>
      <Layout row around>
        <Input {...name.props} />
      </Layout>
    </Themed>
  );
}
