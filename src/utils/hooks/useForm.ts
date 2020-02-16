/* eslint-disable prefer-const */
import { useState, useEffect, useCallback, useMemo } from "react";

interface UseFormModifierParams {
  name: string;
  value: any;
  form: any;
}

interface UseFormPreset {
  [field: string]: {
    default?: string;
    value?: string;

    modifier?: (param: UseFormModifierParams) => any;
    validation?: (value: any) => string | null;

    [props: string]: any;
  };
}

interface UseFormOptions {
  defaults?: any;
  validateOnInteraction?: boolean;
  autoHideErrors?: boolean;
}

/**
 * Auto generates handlers, states and props for forms.
 *
 * @param preset An object containing all of the fields in the form.
 * @param options An object containing extraneous options for the form behaviour.
 */

export default function useForm(
  preset: UseFormPreset,
  options: UseFormOptions = {}
) {
  const [body, errs] = useMemo(() => {
    const body: any = {};
    const errs: any = {};

    Object.entries(preset).forEach(([key, field]: [string, any]) => {
      if (typeof field !== "object" || field instanceof Array) {
        field = {
          default: field,
        };
      }
      if (options?.defaults && options?.defaults[key] !== undefined) {
        field = {
          ...field,
          default: options?.defaults[key],
        };
      }
      if (field.default && field.value === undefined) {
        field.value = field.default;
      }

      const { value, modifier } = field;

      body[key] = modifier ? modifier(value) : value === undefined ? "" : value;
      errs[key] = null;
    });

    return [body, errs];
  }, [preset]);

  const [Form, setForm]: any = useState(body);
  const [Errors, setErrors]: any = useState(errs);

  const Validate = useCallback(() => {
    let res = true;

    Object.entries(preset).forEach(([key, { validation }]: any) => {
      const partial =
        typeof validation !== "function" && validation !== undefined
          ? validation
          : validation({ name: key, value: Form[key], Form });

      setErrors((current: any) => ({
        ...current,
        [key]: partial,
      }));

      if (res) {
        res = partial === null;
      }
    });

    return res;
  }, [Form]);

  const handler = useCallback(
    (e: any, nameOverride?: string) => {
      let { value, name, target } = e;

      if (!preset[name]) {
        return;
      }

      if (target) {
        name = target.name;
      }

      if (nameOverride) {
        name = nameOverride;
      }

      const { modifier, validation } = preset[name];
      const { autoHideErrors, validateOnInteraction } = options;

      if (!(autoHideErrors === false)) {
        setErrors((currentErrors: any) => ({ ...currentErrors, [name]: null }));
      }

      if (modifier) {
        value = modifier(value);
      }

      setForm((currentForm: any) => ({
        ...currentForm,
        [name]: value,
      }));

      if (validateOnInteraction && validation !== undefined) {
        setErrors((currentErrors: any) => ({
          ...currentErrors,
          [name]:
            typeof validation === "function"
              ? validation({ name, value, form: Form })
              : validation,
        }));
      }
    },
    [Form, preset]
  );

  const Setter = useCallback((value: any) => {
    const previous = { ...Form };
    if (typeof)
  }, [Form, preset])

  // useEffect(() => {}, []);
}
