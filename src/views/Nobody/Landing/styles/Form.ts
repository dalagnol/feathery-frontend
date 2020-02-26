import styled from "styled-components";

export const InputContainer = styled.div`
  grid-column-start: col1;
  grid-column-end: col3;
  grid-row-start: row1;
  grid-row-end: row2;
`;

export const Input = styled.input`
  background-color: #ffffff66;
  color: #000000;

  font: 1em Helvetica;

  border: none;
  border-radius: 5px;
  border-sizing: border-box;
  border-bottom: 1px dashed #77777766;

  height: 50px;

  box-shadow: 0px 0px 2px #aaaaaa;

  width: 100%;

  transition: all 0.22s ease-in-out;

  text-indent: 1em;

  &:hover {
    box-shadow: 0px 0px 10px #00000044;
    color: #ffffff;
    background-color: #999999;
  }

  &:focus {
    box-shadow: 0px 0px 10px #00000099;
    background-color: #777777};
    color: #ffffff;
  }
`;
