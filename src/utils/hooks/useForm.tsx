/* eslint-disable prefer-const */
import React, { useState, useCallback, useMemo, useEffect } from "react";

export interface UseFormParams {
  name: string;
  value: any;
  form: any;
}

export interface UseFormPreset {
  [field: string]:
    | {
        default?: string;
        value?: string;

        props?: any;

        modifier?: (param: UseFormParams) => any;
        validation?: (value: any) => string | null;

        [props: string]: any;
      }
    | any;
}

export interface UseFormOptions {
  defaults?: any;
  validateOnInteraction?: boolean;
  autoHideErrors?: boolean;

  onChange?: (form: any, props: any) => void;

  ErrorComponent?: ({ children }: { children: string }) => React.ReactElement;

  service?: Function;
  onInit?: (data: any) => any;
  preSubmit?: (data: any) => any;
  postSubmit?: (data: any) => any;
  onSuccess?: (data: any) => any;
  onError?: (data: any) => any;
  onExit?: (data: any) => any;
  errors?: any;
}

/**
 * Auto generates handlers, states and props for forms.
 *
 * @param preset An object containing all of the fields in the form.
 * @param options An object containing extraneous options for the form behaviour.
 */

export function useForm(preset: UseFormPreset, options: UseFormOptions = {}) {
  const [loading, setLoading] = useState(false);
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

  const validationWrapper = useCallback(
    (validator: any) => {
      const { ErrorComponent } = options;
      const result = typeof validator === "function" ? validator() : validator;

      if (!ErrorComponent) {
        return result;
      } else if (result) {
        return <ErrorComponent>{result}</ErrorComponent>;
      }

      return null;
    },
    [preset, form, options]
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

        Object.entries(preset).forEach(
          ([key, { validation }]: [string, any]) => {
            const changed =
              (typeof form[key] === "object" &&
                (typeof next[key] !== "object" ||
                  JSON.stringify(currentState[key]) !==
                    JSON.stringify(next[key]))) ||
              currentState[key] !== next[key];

            if (changed && validation !== undefined) {
              nextErrors[key] = validationWrapper(
                typeof validation === "function"
                  ? validation({
                      name: key,
                      value: next[key],
                      form: { ...form },
                    })
                  : validation
              );
            }
          }
        );

        setErrors(nextErrors);
      }

      setForm(next);

      if (options?.onChange) {
        options.onChange(next, { set });
      }
    },
    [form, errors, options]
  );

  const validate = useCallback(() => {
    let res = true;

    Object.entries(preset).forEach(([name, { validation }]: any) => {
      const partial =
        (typeof validation !== "function" && validation !== undefined
          ? validation
          : validation !== undefined
          ? validation({ name, value: form[name], form: { ...form } })
          : null) || null;

      setErrors((current: any) => ({
        ...current,
        [name]: validationWrapper(partial),
      }));

      if (res) {
        res = partial === null;
      }
    });

    return res;
  }, [form, preset]);

  const handler: any = useCallback(
    (e: any, nameOverride?: string) => {
      let { value, name, target } = e;

      if (target) {
        if (target.value !== undefined) {
          value = target.value;
        }
        if (target.name !== undefined) {
          name = target.name;
        }
      } else if (nameOverride) {
        name = nameOverride;
        if (name.name) {
          name = name.name;
        }
      }
      if (value === undefined) {
        value = e;
      }

      if (preset[name] === undefined) {
        return;
      }

      const { modifier, validation, onChange } = preset[name];
      const { autoHideErrors, validateOnInteraction } = options;

      if (!(autoHideErrors === false)) {
        setErrors((currentErrors: any) => ({ ...currentErrors, [name]: null }));
      }

      if (modifier) {
        value = modifier({ value, name, form: { ...form } });
      }

      set((currentForm: any) => ({
        ...currentForm,
        [name]: value,
      }));

      if (onChange) {
        onChange(
          {
            value,
            name,
            form: { ...form, [name]: value },
          },
          { set }
        );
      }

      if (options.onChange) {
        options.onChange(
          {
            ...form,
            [name]: value,
          },
          { set }
        );
      }

      if (validateOnInteraction && validation !== undefined) {
        setErrors((currentErrors: any) => ({
          ...currentErrors,
          [name]: validationWrapper(
            typeof validation === "function"
              ? validation({ name, value, form })
              : validation
          ),
        }));
      }
    },
    [form, preset, options]
  );

  const props = useMemo(() => {
    const result: any = {};
    Object.entries(preset).forEach(([name, field]: [string, any]) => {
      const extraProps = { ...field };

      ["modifier", "default", "value", "validation"].forEach(property => {
        delete extraProps[property];
      });

      let value = form[name];
      if (preset[name]?.props?.value) {
        value =
          typeof preset[name]?.props.value === "function"
            ? preset[name]?.props.value({ ...field, name, value, form })
            : preset[name]?.props.value;
      }

      let onChange = handler;
      if (field?.props?.onChange) {
        onChange =
          typeof field.props.onChange === "function"
            ? field.props.onChange({ name, value, form })
            : field.props.onChange;
      }

      let disabled = false;
      if (field?.disabled) {
        disabled =
          typeof field.disabled === "function"
            ? field.disabled({ name, value, form })
            : field.disabled;
      }

      result[name] = {
        ...extraProps,
        disabled,
        value,
        name,
        onChange: (...previousParams: any) => onChange(...previousParams, name),
      };
    });

    return result;
  }, [form, handler, preset]);

  const final: any = {};
  const { service, preSubmit, postSubmit, onSuccess, onError } = options;
  let submit = function() {
    if (preSubmit) {
      preSubmit(form);
    }
  };

  Object.entries(preset).forEach(([key]: [string, any]) => {
    final[key] = {
      value: form[key],
      props: props[key],
      error: errors[key],
    };
  });

  if (service) {
    submit = async function() {
      setLoading(true);
      try {
        if (preSubmit) {
          preSubmit(form);
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

        const message = oof?.response?.data?.message;

        if (options.errors && message) {
          const match = Object.entries(options.errors).find(
            ([key]: [string, any]) => {
              return key
                .toLowerCase()
                .split(",")
                .some(keyword => message.toLowerCase().includes(keyword));
            }
          );

          if (match) {
            const [, hand]: any = match;
            hand();
          }
        } else if (errors.none && !message) {
          errors.none();
        }
      }
      setLoading(false);
    };
  }

  const formProps = {
    onSubmit(e: any) {
      e.preventDefault();
      submit();
    },
  };

  const { onInit, onExit } = options;
  useEffect(() => {
    if (onInit) {
      setTimeout(() => {
        onInit(form);
      }, 1);
    }

    return () => {
      if (onExit) {
        onExit(form);
      }
    };
  }, []);

  return [
    final,
    {
      form,
      props,
      errors,
      set,
      validate,
      submit,
      loading,
      formProps,
    },
  ];
}
