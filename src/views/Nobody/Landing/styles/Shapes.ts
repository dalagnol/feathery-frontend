import styled from "styled-components";

export const Square = styled.div`
  width: 300px;
  height: 300px;

  box-shadow: 0px 0px 25px #00000044;

  transition: all 0.3s ease-in-out;

  background-color: ${({ theme }) => theme.landing?.backgroundColor};
  color: ${({ theme }) => theme.landing?.text};
`;
