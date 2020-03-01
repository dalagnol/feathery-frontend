import styled from "styled-components";

export const Container = styled.div<any>`
  padding: 10px;

  div {
    display: flex;
    font-size: 0.8em;

    width: 280px;

    justify-content: space-between;

    span {
      opacity: 0.8;
    }

    b {
      opacity: 0.5;
    }
  }
`;
