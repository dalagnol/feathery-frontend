import styled from "styled-components";
import { ErrorAlt } from "styled-icons/boxicons-regular/ErrorAlt";
import { iPhone, iPad, Mac } from "styles/Screens";

export const ErrorIcon = styled(ErrorAlt)`
  color: #d82700;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 20px #00000022;

  color: ${({ theme }) => theme.text};

  display: flex;
  justify-content: center;
  align-items: center;

  height: 570px;
  width: 570px;
`;

export const ErrMessage = styled.p`
  color: #D82700;

  font-family: Amatic SC;
  text-align: center;

  width: 90%;

  ${iPhone(`
    font-size: 20px;
  `)}

  ${iPad(`
    font-size: 30px;
  `)}

  ${Mac(`
    font-size: 30px;
  `)}
`;
