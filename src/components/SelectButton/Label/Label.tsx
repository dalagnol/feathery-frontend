import React from "react";

export default function Label({ children, ...props }: any) {
  return <label {...props}>{children}</label>;
}
