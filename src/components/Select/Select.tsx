import React, { useState, createContext } from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { useTimer, useExternalClick } from "utils/hooks";
import { context as make } from "./constants";
import { shallowly } from "utils/helpers";
import "./types.d";

import { Container, Arrow, Box } from "./styles";

import List from "./List/List";

export const Context: any = createContext({});

export default function Select({
  open,
  setOpen,
  value,
  setValue,
  lookup,
  setLookup,
  children,
  placeholder,
  onChange,
  ...props
}: any) {
  const { select } = Locale.use(Dictionary);
  const [internalOpenState, setInternalOpenState] = useState(false);
  const [internalValue, setInternalValue] = useState(null);
  const [internalLookup, setInternalLookup] = useState("");

  const [openState, setOpenState] = [
    open || internalOpenState,
    setOpen || setInternalOpenState,
  ];
  const [valueState, setValueState] = [
    value || internalValue,
    setValue || setInternalValue,
  ];
  const [lookupState, setLookupState] = [
    lookup || internalLookup,
    setLookup || setInternalLookup,
  ];

  const [display, setDisplay] = useState(
    valueState !== null
      ? children.find((child: any) => shallowly(child.props.value, valueState))
          .props.value
      : ""
  );

  const [closing, triggerClose] = useTimer(300, {
    effect: () => {
      setOpenState(false);
    },
  });

  const choose = ({ name, children, value }: Option) => {
    setDisplay(children || (value as string));

    setValueState(value);

    if (onChange) {
      onChange({ name, children, value });
    }

    triggerClose();
  };

  const toggle = () => setOpenState(!openState);
  const ref = useExternalClick(triggerClose);

  const context = make(
    openState,
    valueState,
    lookupState,
    setLookupState,
    closing,
    choose,
    triggerClose,
    toggle,
    props
  );

  const containerProps = {
    ref,
    className: "SelectContainer",
    ...context,
    ...props,
  };

  return (
    <Context.Provider value={context}>
      <Container {...containerProps}>
        <Box className={"noborder"} onClick={toggle}>
          {display || placeholder || select}
          <Arrow {...context} />
        </Box>
        <List>{children}</List>
      </Container>
    </Context.Provider>
  );
}
