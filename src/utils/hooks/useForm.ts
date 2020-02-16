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

  const [Form, setForm]: any = useState(body);
  const [Errors, setErrors]: any = useState(errs);

  const Validate = useCallback(() => {
    let res = true;

    Object.entries(preset).forEach(([name, { validation, value }]: any) => {
      const partial =
        typeof validation !== "function" && validation !== undefined
          ? validation
          : validation({ name, value, Form });

      setErrors((current: any) => ({
        ...current,
        [name]: partial,
      }));

      if (res) {
        res = partial === null;
      }
    });

    return res;
  }, [Form, preset]);

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
        value = modifier({ value, name, form: { ...Form } });
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
    [Form, preset, options]
  );

  const Setter = useCallback(
    (nextState: any) => {
      const { validateOnInteraction } = options;
      const currentState = { ...Form };
      let next: any;

      if (typeof nextState === "function") {
        next = nextState({ ...Form });
      } else {
        next = nextState;
      }

      if (validateOnInteraction) {
        const nextErrors: any = { ...Errors };

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
                  ? validation({ name: key, value, form: { ...Form } })
                  : validation;
            }
          }
        );

        setErrors(nextErrors);
      }

      setForm(next);
    },
    [Form, Errors, options]
  );

  const Props = useMemo(() => {
    const result: any = {};
    Object.entries(preset).forEach(([key, field]: [string, any]) => {
      const extraProps = { ...field };

      ["modifier", "default", "value", "validation"].forEach(property => {
        delete extraProps[property];
      });

      result[key] = {
        ...extraProps,
        value: Form[key],
        name: key,
        onChange: handler,
      };
    });

    return result;
  }, [Form, handler, preset]);

  const Final: any = {};

  Object.entries(preset).forEach(([key]: [string, any]) => {
    Final[key] = {
      value: Form[key],
      props: Props[key],
      error: Errors[key],
    };
  });

  return [
    Final,
    {
      Form,
      Props,
      Errors,
      Setter,
      Validate,
    },
  ];
}
