import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;

  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.tertiary};

  overflow: scroll;

  color: ${({ theme }) => theme.text};
`;
