import React, { useContext } from "react";

import { Container, Check } from "./styles";

import { Context } from "../../Select";

export default function Component({ children, ...props }: Option) {
  const { value, choose, open, name } = useContext(Context);
  return (
    <Container
      open={open}
      onClick={() => choose({ name, children, value: props.value })}
    >
      {value === props.value && <Check size={32} />}
      <p>{children}</p>
    </Container>
  );
}
