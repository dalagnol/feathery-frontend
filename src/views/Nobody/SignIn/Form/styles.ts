import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 300px;

  margin: 0px auto;

  * {
    margin: 10px 0px;
  }

  footer {
    display: flex;
    flex: 1;

    width: 100%;

    justify-content: center;
  }
`;
