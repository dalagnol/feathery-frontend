import React from "react";
import { CodeCurly, TrashAlt } from "styled-icons/boxicons-regular";
import { Translate } from "@styled-icons/material/Translate";

export const Add = (props: any) => (
  <Translate
    {...props}
    size={18}
    style={{
      animation: "slideLeft 0.5s",
    }}
  />
);

export const Export = (props: any) => (
  <CodeCurly
    {...props}
    size={18}
    style={{
      animation: "slideLeft 1s",
    }}
  />
);

export const Delete = (props: any) => (
  <TrashAlt
    {...props}
    size={18}
    style={{
      animation: "slideLeft 1.5s",
    }}
  />
);
