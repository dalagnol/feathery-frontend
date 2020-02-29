import React from "react";
import styled from "styled-components";
import "styles/animations";
import * as Entypo from "styled-icons/entypo";
import * as Material from "styled-icons/material";

interface Props {
  open?: boolean;
}

export const Container = styled.aside<Props>`
  transition: all 0.3s ease-in-out;
  background-color: #00000044;

  position: fixed;
  right: 0;
  top: 0;

  height: 100vh;
  width: 300px;
  max-height: 100vh;

  font-family: Nanum Gothic;

  ${({ open }) => `
    max-height: ${!open ? "60px" : "100vh"};
    max-width: ${open ? "300px" : "180px"};

    header {
      padding: ${open ? "10px 40px" : "0px 30px"};

      ${!open && "margin: -20px;"}
    }
  `}
`;

export const Header = styled.header<Props>`
  color: white;

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 255),
      rgba(255, 255, 255, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Icons = styled.div`
  * {
    cursor: pointer;
  }
`;
export const Names = styled.div`
  display: flex;
  p {
    margin: 0px 10px;
    cursor: pointer;
  }
`;

export const Title = styled.h1<Props>`
  cursor: pointer;

  ${({ open }) => !open && `font-size: 2em;`}
`;

export const Pin = (props: any) => <Entypo.Pin {...props} size={24} />;
export const Add = (props: any) => (
  <Material.Add
    style={{
      transition: "all 0.3s ease-in-out",
      transform: props.rotate ? "rotate(45deg)" : "rotate(0deg)",
    }}
    {...props}
    size={24}
  />
);
export const Palette = (props: any) => (
  <Material.Palette {...props} size={48} />
);

export const Input = styled.input`
  background-color: #00000000;
  border: none;

  color: white;
  padding: 10px;

  font: 1em Nanum Gothic;

  outline: none;

  min-width: 240px;

  animation: slideDown 0.5s;
`;
