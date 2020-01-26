import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.primary};
`;
