import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Container, Genders, Radios, Label } from "./styles";

import { Button, Input, Radio, Subheading as Sub } from "components";

const Localised = Locale.use(Dictionary);

export default function Form({ form }: any) {
  const [data, { fullname, username, email, gender, password }] = form;

  const FormProps = {
    method: "POST",
    onSubmit: (e: any) => e.preventDefault(),
  };

  return (
    <Container {...FormProps}>
      <Sub>{Localised.fullname}</Sub>
      <Input {...fullname} />
      <Sub>{Localised.username}</Sub>
      <Input {...username} />
      <Sub>{Localised.email}</Sub>
      <Input {...email} />
      <Sub>{Localised.gender}</Sub>
      <Genders>
        <Radios>
          <Radio {...gender} value="male" />
          <Label>{Localised.male}</Label>
        </Radios>
        <Radios>
          <Radio {...gender} value="female" />
          <Label>{Localised.female}</Label>
        </Radios>
      </Genders>
      <Sub>{Localised.password}</Sub>
      <Input {...password} />
      <Button>{Localised.signup}</Button>
    </Container>
  );
}
