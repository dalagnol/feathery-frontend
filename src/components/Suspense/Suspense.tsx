import React from "react";

import Styles from "./Suspense.module.scss";
import { Loader } from "styled-icons/feather";

export default function Suspense({ children, data, ...props }: any) {
  const { Suspense, SuspenseIcon } = Styles;
  const ignoredProps = ["children", "data"];
  return (
    (data !== null &&
      data !== undefined &&
      (!(data instanceof Array) || data.length) &&
      (!Object.keys(props).every((key: string) =>
        ignoredProps.includes(key)
      ) ? (
        <div {...props}>{children}</div>
      ) : typeof children === "function" ? (
        children(data)
      ) : (
        children
      ))) || (
      <div {...props} className={`${Suspense} ${props.className}`}>
        <Loader className={SuspenseIcon} size={44} />
      </div>
    )
  );
}
