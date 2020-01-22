import styled from "styled-components";

export const Option = styled.option`
  background-color: ${({ theme }) => theme.primary};
  &:hover {
    background-color: ${({ theme }) => theme.secundary};
  }
  &:focus {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.text};
  }
`;
