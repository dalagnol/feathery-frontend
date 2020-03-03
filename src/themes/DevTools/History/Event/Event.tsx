import React from "react";
import moment from "moment";
import styled from "styled-components";
import { Container } from "./styles";

const Log = styled.p<any>`
  color: ${({ type }) =>
    type === "ERROR"
      ? "red"
      : type === "WARNING"
      ? "orange"
      : type === "INFO"
      ? "#A6F7E8"
      : "white"};

  animation: ${({ type }) => (type === "ERROR" ? "pulse 2s infinite" : "none")};
`;

export default function Event({ agent, log, timestamp, type }: any) {
  return (
    <Container>
      <Log type={type}>{log}</Log>
      <div>
        <span>{agent}</span>
        <b>{moment().valueOf() - moment(timestamp).valueOf()}ms ago</b>
      </div>
    </Container>
  );
}
