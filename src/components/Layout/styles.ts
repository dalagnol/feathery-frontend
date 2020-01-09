import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.primary};
`;

export const Content = styled.main`
  width: 100%;
  min-height: calc(100vh - 40px);

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 0px;
`;
