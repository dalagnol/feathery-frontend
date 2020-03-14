import React from "react";
import { CodeCurly, TrashAlt, Plus } from "styled-icons/boxicons-regular";

export const Add = (props: any) => (
  <Plus
    onClick={props.onClick}
    size={18}
    style={{
      animation: "slideLeft 0.5s",
      transform: props.rotate ? "rotate(45deg)" : "rotate(0deg)"
    }}
  />
);

export const Export = (props: any) => (
  <CodeCurly
    {...props}
    size={18}
    style={{
      animation: "slideLeft 1s"
    }}
  />
);

export const Delete = (props: any) => (
  <TrashAlt
    {...props}
    size={18}
    style={{
      animation: "slideLeft 1.5s"
    }}
  />
);
