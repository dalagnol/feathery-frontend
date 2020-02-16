/* eslint-disable prefer-const */
import { useState, useCallback, useMemo } from "react";

export interface UseFormModifierParams {
  name: string;
  value: any;
  form: any;
}

interface UseFormPreset {
  [field: string]:
    | {
        default?: string;
        value?: string;

        modifier?: (param: UseFormModifierParams) => any;
        validation?: (value: any) => string | null;

        [props: string]: any;
      }
    | any;
}

interface UseFormOptions {
  defaults?: any;
  validateOnInteraction?: boolean;
  autoHideErrors?: boolean;

  service?: Function;
  preSubmit?: () => void;
  postSubmit?: (data: any) => void;
  onSuccess?: (data: any) => void;
  onError?: (data: any) => void;
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
  const init = useCallback(() => {
    const body: any = {};
    const errs: any = {};

    Object.entries(preset).forEach(([name, field]: [string, any]) => {
      if (typeof field !== "object" || field instanceof Array) {
        field = {
          default: field,
        };
      }
      if (options?.defaults && options?.defaults[name] !== undefined) {
        field = {
          ...field,
          default: options?.defaults[name],
        };
      }
      if (field.default && field.value === undefined) {
        field.value = field.default;
      }

      if (field.value === undefined) {
        field.value = "";
      }

      const { value, modifier } = field;

      body[name] = modifier
        ? modifier({ value, name, form: { ...body } })
        : value === undefined
        ? ""
        : value;
      errs[name] = null;
    });

    return [body, errs];
  }, [preset, options]);

  const [body, errs] = init();

  const [form, setForm]: any = useState(body);
  const [errors, setErrors]: any = useState(errs);

  const validate = useCallback(() => {
    let res = true;

    Object.entries(preset).forEach(([name, { validation }]: any) => {
      const partial =
        typeof validation !== "function" && validation !== undefined
          ? validation
          : validation({ name, value: form[name], form: { ...form } });

      setErrors((current: any) => ({
        ...current,
        [name]: partial,
      }));

      if (res) {
        res = partial === null;
      }
    });

    return res;
  }, [form, preset]);

  const handler = useCallback(
    (e: any, nameOverride?: string) => {
      let { value, name, target } = e;

      if (nameOverride) {
        name = nameOverride;
      } else if (target) {
        value = target.value;
        name = target.name;
      }

      if (preset[name] === undefined) {
        return;
      }

      const { modifier, validation } = preset[name];
      const { autoHideErrors, validateOnInteraction } = options;

      if (!(autoHideErrors === false)) {
        setErrors((currentErrors: any) => ({ ...currentErrors, [name]: null }));
      }

      if (modifier) {
        value = modifier({ value, name, form: { ...form } });
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
              ? validation({ name, value, form: form })
              : validation,
        }));
      }
    },
    [form, preset, options]
  );

  const set = useCallback(
    (nextState: any) => {
      const { validateOnInteraction } = options;
      const currentState = { ...form };
      let next: any;

      if (typeof nextState === "function") {
        next = nextState({ ...form });
      } else {
        next = nextState;
      }

      if (validateOnInteraction) {
        const nextErrors: any = { ...errors };

        Object.entries(currentState).forEach(
          ([key, { validation, value }]: [string, any]) => {
            const changed =
              (typeof value === "object" &&
                (!(typeof next[key] !== "object") ||
                  JSON.stringify(value) !== JSON.stringify(next[key]))) ||
              value !== next[key];

            if (changed && validation !== undefined) {
              nextErrors[key] =
                typeof validation === "function"
                  ? validation({ name: key, value, form: { ...form } })
                  : validation;
            }
          }
        );

        setErrors(nextErrors);
      }

      setForm(next);
    },
    [form, errors, options]
  );

  const props = useMemo(() => {
    const result: any = {};
    Object.entries(preset).forEach(([key, field]: [string, any]) => {
      const extraProps = { ...field };

      ["modifier", "default", "value", "validation"].forEach(property => {
        delete extraProps[property];
      });

      result[key] = {
        ...extraProps,
        value: form[key],
        name: key,
        onChange: handler,
      };
    });

    return result;
  }, [form, handler, preset]);

  const final: any = {};
  const { service, preSubmit, postSubmit, onSuccess, onError } = options;
  let submit;

  Object.entries(preset).forEach(([key]: [string, any]) => {
    final[key] = {
      value: form[key],
      props: props[key],
      error: errors[key],
    };
  });

  if (service) {
    submit = async function() {
      try {
        if (preSubmit) {
          preSubmit();
        }
        const data = await service({ ...form });
        if (postSubmit) {
          postSubmit(data);
        }
        if (onSuccess) {
          onSuccess(data);
        }
      } catch (oof) {
        if (onError) {
          onError(oof);
        }
      }
    };
  }

  return [
    final,
    {
      form,
      props,
      errors,
      set,
      validate,
      submit,
    },
  ];
}
