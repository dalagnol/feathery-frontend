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

  const Props = Object.entries(body).map((entry: any) => ({
    value: form[entry[0]],
    name: entry[0],
    onChange: { Handler },
  }));

  return [form, Props, Handler, setForm];
}
