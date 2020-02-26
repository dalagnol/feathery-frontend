import styled from "styled-components";

export const Playground = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 600px;
  height: 800px;

  display: grid;

  grid-template-columns: [col1] 40px [col2] 50px [col3] auto [col4] 50px [col5] 40px [col6];
  grid-template-rows: [row1] 25% [row2] 100px [row3] auto [row4];

  grid-column-gap: 20px;
  grid-row-gap: 20px;

  background-color: white;
`;
