import styled from "styled-components";
import { Exclamation } from "styled-icons/fa-solid/Exclamation";
import { iPhone, iPad, Mac } from "styles/Screens";

export const ErrorIcon = styled(Exclamation)`
  width: 24px;
  height: 24px;

  color: #d82700;
`;

export const Container = styled.div`
  display: flex;z
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
`;

export const ErrMessage = styled.p`
  color: #d82700;

  font-family: Nanum Gothic;
  text-align: center;

  ${iPhone(`
    font-size: 18px;
  `)}

  ${iPad(`
    font-size: 22px;
  `)}

  ${Mac(`
    font-size: 22px;
  `)}
`;
