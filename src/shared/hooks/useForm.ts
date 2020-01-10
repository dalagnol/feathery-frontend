import { useState } from "react";

export default function useForm(body: any) {
  const [form, setForm] = useState(body);

  const Handler = (e: any) => {
    const {
      target: { name, value },
    } = e;
    setForm((form: any) => ({
      ...form,
      [name]: value,
    }));
  };

  const Props: any = {};

  Object.entries(body).map((entry: any) => {
    Props[entry[0]] = {
      value: form[entry[0]],
      name: entry[0],
      onChange: Handler,
    };

    if (entry[0].toLowerCase() === "password") {
      Props[entry[0]].type = "password";
    }
  });

  return [form, Props, Handler, setForm];
}
