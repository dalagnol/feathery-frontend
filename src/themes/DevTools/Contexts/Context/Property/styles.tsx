import React from "react";
import styled from "styled-components";
import "styles/animations";
import { TimesCircle } from "styled-icons/fa-regular/TimesCircle";

export const Container = styled.div`
  height: 30px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: fadeIn 0.5s;

  margin: 0px 10px;

  div {
    display: flex;
    align-items: center;

    *:not(input) {
      margin: 0px 2px;
    }

    p {
      margin-right: 25px;
    }
  }
`;

export const Delete = (props: any) => <TimesCircle {...props} size={16} />;

export const Input = styled.input<any>`
  background-color: #00000000;
  border: none;

  font: 1em Nanum Gothic;

  outline: none;

  max-width: 100px;
  margin-right: 25px;

  animation: slideDown 0.5s;

  text-align: ${({ align }) => align || "left"};
`;
