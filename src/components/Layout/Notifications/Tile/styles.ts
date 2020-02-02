import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;

  padding: 20px;

  cursor: pointer;

  background-color: ${({ theme }) => theme.primary};
  border-top: 1px dashed ${({ theme }) => theme.tertiary};
  border-bottom: 1px dashed ${({ theme }) => theme.tertiary};

  * {
    font-family: Nanum Gothic;
    color: ${({ theme }) => theme.text};
  }

  h4 {
    margin: 2px;
  }

  p {
    display: flex;
    flex: 1;
  }
`;
