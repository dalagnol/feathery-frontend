import styled from "styled-components";

export const Container = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: 100%;

  transition: all 0.3s ease-in-out;

  max-height: ${({ open }) => (open ? "500px" : "40px")};
  overflow: hidden;

  * {
    text-indent: 1em;
  }

  h4,
  h2 {
    background-color: #00000044;
    padding: 10px 0px;
    margin: 0;

    span {
      color: #ffffff44;
      font-size: 0.7em;
    }
  }

  div {
    background-color: #00000044;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 5px 20px;
    }
  }

  input {
    background-color: #00000000;
    text-align: right;
    border: none;
    padding: 5px 20px;
    font-size: 1em;
    outline: none;

    transition: all 0.3s ease-in-out;
  }
`;
