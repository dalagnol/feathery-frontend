import React, { useRef } from "react";
import { observer } from "mobx-react";
import { useForm, useService, useTimer } from "utils/hooks";
import { base64 } from "utils/helpers";
import { errors } from "./constants";

import {
  Form,
  Header,
  User,
  Main,
  Buttons,
  SelectContainer,
  Handler,
} from "./styles";

import {
  Suspense,
  UserPicture as Picture,
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
  const [, nameTrigger]: any = useTimer(500);
  const [, idtfTrigger]: any = useTimer(500);
  const [, mailTrigger]: any = useTimer(500);
  const [, phoneTrigger]: any = useTimer(500);

  const { user } = Store;
  const [form] = useForm({
    ...user,
    password: {
      type: "password",
    },
    phone: user.phone || "",
    picture: user.picture || "",
  });

  const ref: any = useRef(null);

  const { name, email, gender, phone, picture, password } = form;

  const imageHandler = function(e: any) {
    const {
      target: { files },
    } = e;

    base64(
      files[0],
      (value: string) => picture.props.onChange({ value, name: "picture" }),
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
          <User>
            <Picture src={form.picture} />
          </User>
          <Title>{user.name}</Title>
          <Handler>{`@${user.identifier}`}</Handler>
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
          <Input {...name.props} />
          <Subheading>Email</Subheading>
          <Input {...email.props} />
          <Subheading>Gender</Subheading>
          <SelectContainer>
            <Select {...gender.props}>
              <Option value={"male"}>Male</Option>
              <Option value={"female"}>Female</Option>
            </Select>
          </SelectContainer>
          <Subheading>Phone No.</Subheading>
          <Input {...phone.props} />
          <Subheading>Password</Subheading>
          <Input {...password.props} />
        </Main>
      </Form>
    </Suspense>
  );
});
