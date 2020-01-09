import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.primary};

  width: 100%;
  height: calc(100vh - 40px);
`;
