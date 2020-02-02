import React, { useState, createContext } from "react";
import Locale from "locale";
import Dictionary from "./locale.json";
import { useTimer, useExternalClick } from "utils/hooks";
import "./types.d";

import { Container, Arrow, Box } from "./styles";

import List from "./List/List";
import Option from "./List/Option/Option";

export { Option };

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
  const [display, setDisplay] = useState("");

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

  const [closing, triggerClose] = useTimer(600, {
    effect: () => {
      setOpenState(false);
    },
  });

  const choose = ({ label, value }: Option) => {
    setDisplay(label || (value as string));

    setValueState(value);

    triggerClose();
  };

  const toggle = () => setOpenState(!openState);
  const ref = useExternalClick(triggerClose);

  return (
    <Context.Provider
      value={{
        open: openState,
        value: valueState,
        lookup: lookupState,
        setLookup: setLookupState,
        closing,
        choose,
        close: triggerClose,
        toggle,
      }}
    >
      <Container ref={ref} className={"SelectContainer"} {...props}>
        <Box onClick={toggle}>
          {display || placeholder || select} <Arrow open={openState} />
        </Box>
        <List>{children}</List>
      </Container>
    </Context.Provider>
  );
}
