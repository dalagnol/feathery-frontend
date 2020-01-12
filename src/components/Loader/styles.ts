import styled from "styled-components";

export const Box = styled.div`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 20px #00000022;

  color: ${({ theme }) => theme.text};

  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
  width: 200px;
`;
