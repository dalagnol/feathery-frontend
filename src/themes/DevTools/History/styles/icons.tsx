import React from "react";

import * as Material from "styled-icons/material";

export const Info = (props: any) => (
  <Material.Info
    {...props}
    style={{ opacity: props.active ? "1" : "0.7" }}
    size={24}
  />
);
export const Error = (props: any) => (
  <Material.Error
    {...props}
    style={{ opacity: props.active ? "1" : "0.7" }}
    size={24}
  />
);
export const System = (props: any) => (
  <Material.ChatBubble
    {...props}
    style={{ opacity: props.active ? "1" : "0.7" }}
    size={24}
  />
);
export const Warning = (props: any) => (
  <Material.Warning
    {...props}
    style={{ opacity: props.active ? "1" : "0.7" }}
    size={24}
  />
);
export const Clear = (props: any) => (
  <Material.Delete
    {...props}
    style={{ opacity: props.active ? "1" : "0.7" }}
    size={24}
  />
);

export const Filter = (props: any) => (
  <Material.FilterList
    {...props}
    style={{ opacity: props.active ? "1" : "0.7" }}
    size={24}
  />
);
