/* eslint-disable prefer-const */
import { useState } from "react";

export default function useForm(preset: any, options: any = {}) {
  const body: any = {};

  Object.entries(preset).forEach((entry: any) => {
    body[entry[0]] =
      entry[1].default !== undefined
        ? options.modifier
          ? options.modifier(entry[1].default, entry[0])
          : entry[1].default
        : typeof entry[1] !== "object" || entry[1] instanceof Array
        ? options.modifier
          ? options.modifier(entry[1], entry[0])
          : entry[1]
        : options.modifier
        ? options.modifier("")
        : "";
  });

  const [form, setForm] = useState(body);

  const handler = (e: any, nameOverride?: string) => {
    let { label, value, name, target } = e;

    if (target) {
      value = target.value;
      name = target.name;
    }

    if (nameOverride) {
      name = nameOverride;
    }

    const modifier =
      options.modifier || (preset[name] && preset[name].modifier);

    if (modifier) {
      value = modifier(value, name);
    }

    setForm((form: any) => ({
      ...form,
      [name]: value,
    }));
  };

  const props: any = {};

  Object.entries(preset).forEach((entry: any) => {
    const name = !options.no$ ? `$${entry[0]}` : entry[0];
    props[name] = {
      value: form[entry[0]],
      name: entry[0],
      onChange: handler,
    };

    if (entry[0].toLowerCase() === "password") {
      props[name].type = "password";
    }

    if (typeof preset[entry[0]] === "object") {
      if (preset[entry[0]].type) {
        props[name].type = preset[entry[0]].type;
      }
    }

    if (options) {
      if (options[entry[0]] && options[entry[0]].type) {
        props[name].type = options[entry[0]].type;
      }
    }
  });

  return [form, props, setForm, handler];
}
