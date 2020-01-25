import styled from "styled-components";

export const Select = styled.select`
  cursor: pointer;

  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.blurry};
  background-color: ${({ theme }) => theme.primary};

  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  border-radius: 10px;

  margin: 10px 0 10px 13px;

  width: 200px;
  height: 42px;

  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px #00000022;
  }
  &:focus {
    background-color: ${({ theme }) => theme.secundary};
  }
`;
