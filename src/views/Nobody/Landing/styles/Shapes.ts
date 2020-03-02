import styled from "styled-components";

export const Square = styled.div`
  width: ${({ theme }) => theme.size?.width || "300px"};
  height: ${({ theme }) => theme.size?.height || "300px"};
  font-size: ${({ theme }) => theme.size?.font || "1em"};

  cursor: pointer;

  box-shadow: ${({ theme }) =>
    theme.landing?.shadow || "0px 0px 25px #00000044"};

  transition: all 0.3s ease-in-out;

  background-color: ${({ theme }) => theme.landing?.backgroundColor};
  color: ${({ theme }) => theme.landing?.text};
`;
