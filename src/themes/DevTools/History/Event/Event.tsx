import React from "react";
import moment from "moment";
import styled from "styled-components";
import "styles/animations";
import { Container } from "./styles";

const Log = styled.p<any>`
  color: ${({ type }) =>
    type === "error"
      ? "red"
      : type === "warning"
      ? "orange"
      : type === "info"
      ? "#A6F7E8"
      : "white"};

  animation: ${({ type }) =>
    type && type === "error" ? "pulse 2s infinite" : "none"};
`;

export default function Event({ agent, log, timestamp, type }: any) {
  return (
    <Container>
      <Log type={type.toLowerCase()}>{log}</Log>
      <div>
        <span>{agent}</span>
        <b>{moment().valueOf() - moment(timestamp).valueOf()}ms ago</b>
      </div>
    </Container>
  );
}
