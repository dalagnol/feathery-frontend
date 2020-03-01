import React from "react";
import styled from "styled-components";
import { TimesCircle } from "styled-icons/fa-regular/TimesCircle";

export const Container = styled.div`
  height: 30px;
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: fadeIn 0.5s;

  overflow: hidden;

  div {
    overflow: hidden;

    text-overflow: clip;
    text-overflow: ellipsis;
    text-overflow: "…";
    text-overflow: fade;
    text-overflow: fade(10px);
    text-overflow: fade(5%);
    white-space: nowrap;

    max-width: 150px;
    max-height: 30px;

    display: flex;
    align-items: center;

    *:not(input) {
      margin: 0px 2px;
    }

    p {
      margin-right: 5px;
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
  margin-right: 5px;

  animation: slideDown 0.5s;

  text-align: ${({ align }) => align || "left"};
`;
