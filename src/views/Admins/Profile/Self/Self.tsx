import React, { useRef } from "react";
import { observer } from "mobx-react";
import { Form } from "./styles";
import { useForm } from "utils/hooks";
import { base64 } from "utils/helpers";

import {
  Suspense,
  UserPicture,
  Input,
  Select,
  Option,
  Button,
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
        <header>
          <div>
            <UserPicture src={form.picture} />
          </div>
          <h1>Guilherme Moresco</h1>
        </header>
        <main>
          <header>
            <input onChange={imageHandler} ref={ref} type="file" hidden />
            <Button onClick={() => ref.current.click()}>Set a picture</Button>
            <Button>Save</Button>
          </header>
          <label>Name</label>
          <Input {...$name} />
          <label>Email</label>
          <Input {...$email} />
          <label>Gender</label>
          <div>
            <Select {...$gender}>
              <Option value={"male"}>Male</Option>
              <Option value={"female"}>Female</Option>
            </Select>
          </div>
          <label>Phone No.</label>
          <Input {...$phone} />
        </main>
      </Form>
    </Suspense>
  );
});
