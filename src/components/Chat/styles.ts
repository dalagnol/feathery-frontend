import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 400px;

  border: 1px solid grey;
`;

export const Outer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  height: 500px;
`;

export const Input = styled.input`
  border: 1px solid grey;

  height: 30px;
`;
