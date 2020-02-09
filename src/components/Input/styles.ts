import styled from "styled-components";

export const Input = styled.input<any>`
  background-color: ${({ theme }) => `${theme.primary}66`};
  color: ${({ theme }) => theme.text};

  font: 1em Nanum Gothic;

  border: none;
  border-radius: 5px;
  border-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => `${theme.secondary}bb`};

  height: 50px;

  box-shadow: 0px 0px 2px ${({ theme }) => theme.shadowy};

  width: 100%;

  transition: all 0.22s ease-in-out;

  text-indent: 1em;

  &:hover {
    box-shadow: 0px 0px 10px #00000044;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.tertiary};
  }

  &:focus {
    box-shadow: 0px 0px 10px #00000099;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }

  ${({ shake }) =>
    shake &&
    `
        animation: shake 0.4s;
    `}
`;
