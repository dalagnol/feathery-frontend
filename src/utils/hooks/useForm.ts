import { useState } from "react";

export default function useForm(preset: any, options?: any) {
  const body: any = {};

  Object.entries(preset).forEach((entry: any) => {
    body[entry[0]] =
      entry[1].default || typeof entry[1] === "string" ? entry[1] : "";
  });

  const [form, setForm] = useState(body);

  const handler = (e: any) => {
    const {
      target: { name, value },
    } = e;
    setForm((form: any) => ({
      ...form,
      [name]: value,
    }));
  };

  const props: any = {};

  Object.entries(preset).forEach((entry: any) => {
    props[entry[0]] = {
      value: form[entry[0]],
      name: entry[0],
      onChange: handler,
    };

    if (entry[0].toLowerCase() === "password") {
      props[entry[0]].type = "password";
    }

    if (typeof preset[entry[0]] === "object") {
      if (preset[entry[0]].type) {
        props[entry[0]].type = preset[entry[0]].type;
      }
    }

    if (options) {
      if (options[entry[0]] && options[entry[0]].type) {
        props[entry[0]].type = options[entry[0]].type;
      }
    }
  });

  return [form, props, setForm, handler];
}
