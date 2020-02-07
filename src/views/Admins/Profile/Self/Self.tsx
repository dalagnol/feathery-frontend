import React, { useRef } from "react";
import { observer } from "mobx-react";
import { useForm, useService, useTimer } from "utils/hooks";
import { base64 } from "utils/helpers";
import { errors } from "./constants";

import {
  Form,
  Header,
  UserPictureContainer,
  Main,
  Buttons,
  SelectContainer,
} from "./styles";

import {
  Suspense,
  UserPicture,
  Input,
  Select,
  Option,
  Button,
  Title,
  Subheading,
  Loader,
} from "components";

import Store from "store/Users";
import Service from "services/Users";

export default observer(function Self() {
  const [nameError, nameTrigger]: any = useTimer(500);
  const [idtfError, idtfTrigger]: any = useTimer(500);
  const [mailError, mailTrigger]: any = useTimer(500);
  const [phoneError, phoneTrigger]: any = useTimer(500);

  const { user } = Store;
  const [
    form,
    { $name, $identifier, $email, $gender, $phone, $picture, $password },
  ] = useForm({
    ...user,
    phone: user.phone || "",
    picture: user.picture || "",
  });

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

  const FormProps = {
    method: "PUT",
    onSubmit: (e: any) => e.preventDefault(),
  };

  const [, loading, update] = useService({
    method: Service.Update,
    params: [form],
    handler: (data: any) => {
      Store.user = data;
    },
    errors: errors(nameTrigger, idtfTrigger, mailTrigger, phoneTrigger),
  });

  return (
    <Suspense data={user}>
      {loading && <Loader />}
      <Form {...FormProps}>
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
            <Button onClick={() => typeof update === "function" && update()}>
              Save
            </Button>
          </Buttons>
          <Subheading>Name</Subheading>
          <Input {...$name} />
          <Subheading>Username</Subheading>
          <Input {...$identifier} />
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
          <Subheading>Password</Subheading>
          <Input {...$password} />
        </Main>
      </Form>
    </Suspense>
  );
});
