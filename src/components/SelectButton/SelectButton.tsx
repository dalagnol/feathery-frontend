import React from "react";

import { Select } from "./styles";

export default function SelectButton({ children, ...props }: any) {
  return <Select {...props}>{children}</Select>;
}
