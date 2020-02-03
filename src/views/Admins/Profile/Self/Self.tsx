import React, { useRef } from "react";
import { observer } from "mobx-react";
import { useForm } from "utils/hooks";
import { base64 } from "utils/helpers";

import { Form, Header, UserPictureContainer, Main, Buttons, SelectContainer } from "./styles";

import {
  Suspense,
  UserPicture,
  Input,
  Select,
  Option,
  Button,
  Title,
  Subheading,
} from "components";

import Store from "store/Users";

export default observer(function Self() {
  const { user } = Store;
  const [form, { $name, $email, $gender, $phone, $picture }] = useForm(user);

  const ref: any = useRef(null);

  const imageHandler = function(e: any) {
    const {
      target: { files },
    } = e;

    base64(
      files[0],
      (value: string) => $picture.onChange({ value, name: "picture" }),
      true
    );
  };

  return (
    <Suspense data={user}>
      <Form onSubmit={e => e.preventDefault()}>
        <Header>
          <UserPictureContainer>
            <UserPicture src={form.picture} />
          </UserPictureContainer>
          <Title>{user.name}</Title>
        </Header>
        <Main>
          <Buttons>
            <input onChange={imageHandler} ref={ref} type="file" hidden />
            <Button onClick={() => ref.current.click()}>Set a picture</Button>
            <Button>Save</Button>
          </Buttons>
          <Subheading>Name</Subheading>
          <Input {...$name} />
          <Subheading>Email</Subheading>
          <Input {...$email} />
          <Subheading>Gender</Subheading>
          <SelectContainer>
            <Select {...$gender}>
              <Option value={"male"}>Male</Option>
              <Option value={"female"}>Female</Option>
            </Select>
          </SelectContainer>
          <Subheading>Phone No.</Subheading>
          <Input {...$phone} />
        </Main>
      </Form>
    </Suspense>
  );
});
