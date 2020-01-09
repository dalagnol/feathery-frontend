import React from "react";
import Locale from "locale";
import Dictionary from "./locale.json";

import { Container, GenderContainer, RadioBContainer, Label } from "./styles";

import { Button, Input, RadioButton, Subheading } from "components";

const {
  signup,
  fullname,
  username,
  email,
  gender,
  male,
  female,
  password,
} = Locale.use(Dictionary);

export default function Form({ form, setForm }: any) {
  const onChangeHandler = (e: any) => {
    const {
      target: { name, value },
    } = e;
    setForm((form: any) => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <Container>
      <Subheading>{fullname}</Subheading>
      <Input
        value={form.fullname}
        type={"text"}
        name={"fullname"}
        onChange={onChangeHandler}
      />
      <Subheading>{username}</Subheading>
      <Input
        value={form.username}
        type={"text"}
        name={"username"}
        onChange={onChangeHandler}
      />
      <Subheading>{email}</Subheading>
      <Input
        value={form.email}
        type={"email"}
        name={"email"}
        onChange={onChangeHandler}
      />
      <Subheading>{gender}</Subheading>
      <GenderContainer>
        <RadioBContainer>
          <RadioButton
            value={"male"}
            name={"gender"}
            onChange={onChangeHandler}
          />
          <Label>{male}</Label>
        </RadioBContainer>
        <RadioBContainer>
          <RadioButton
            value={"female"}
            name={"gender"}
            onChange={onChangeHandler}
          />
          <Label>{female}</Label>
        </RadioBContainer>
      </GenderContainer>
      <Subheading>{password}</Subheading>
      <Input
        value={form.password}
        type={"password"}
        name={"password"}
        onChange={onChangeHandler}
      />
      <Button>{signup}</Button>
    </Container>
  );
}
