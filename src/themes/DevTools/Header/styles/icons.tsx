import React from "react";
import * as Entypo from "styled-icons/entypo";
import * as Material from "styled-icons/material";

export const Pin = (props: any) => <Entypo.Pin {...props} size={24} />;
export const Add = (props: any) => (
  <Material.Add
    style={{
      transition: "all 0.3s ease-in-out",
      transform: props.rotate ? "rotate(45deg)" : "rotate(0deg)"
    }}
    onClick={props.onClick}
    size={24}
  />
);
export const Palette = (props: any) => (
  <Material.Palette {...props} size={48} />
);
