import styled from "styled-components";

export const Select = styled.select`
  cursor: pointer;

  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.blurry};
  background-color: ${({ theme }) => theme.primary};

  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  border-radius: 10px;

  padding: 10px 30px;
  margin: 10px;

  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px #00000022;
  }
`;

export const Option = styled.option``;
