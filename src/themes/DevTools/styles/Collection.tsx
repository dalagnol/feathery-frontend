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

  .Subheader {
    background-color: #00000088;
    display: flex;
    justify-content: space-between;

    h2 {
      cursor: pointer;
    }

    p {
      opacity: 0.5;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }

  h4,
  h2 {
    padding: 10px 0px;
    margin: 0;

    span {
      color: #ffffff44;
      font-size: 0.7em;
    }
  }

  > div {
    background-color: #00000044;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      justify-content: flex-end;
      margin-right: 10px;
      * {
        opacity: 0.5;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
    }

    p {
      margin: 10px;
    }
  }

  input {
    background-color: #00000000;
    text-align: right;
    border: none;
    padding: 10px;
    font-size: 1em;
    outline: none;

    transition: all 0.3s ease-in-out;
  }
`;

export const Title = styled.h2<any>`
  ${errors =>
    errors["Missing active palette"] &&
    `
    color: red;
    animation: pulse 2s infinite;
  `}

  padding: 10px 0px;
  margin: 0;

  span {
    color: #ffffff44;
    font-size: 0.7em;
  }
`;
