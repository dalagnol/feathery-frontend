import styled from "styled-components";

interface Props {
  open?: boolean;
}

export const Container = styled.div<Props>`
  max-height: ${({ open }) => (open ? "500px" : "50px")};
  overflow: hidden;

  > header {
    h1 {
      ${({ open }) => open && `margin-left: 10px;`}
    }
  }
`;

export const Header = styled.header`
  background-color: #00000044;

  h1 {
    margin: 0;
    cursor: pointer;

    span {
      font-size: 0.8em;
      opacity: 0.5;
    }
  }

  padding: 0px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 50px;

  div {
    animation: slideLeft 1s;
    * {
      cursor: pointer;
      margin-right: 5px;

      opacity: 0.7;

      &:hover,
      &:active {
        opacity: 1;
      }
    }
  }
`;

export const List = styled.div<Props>`
  height: auto;

  background-color: #00000044;
`;

export const Code = styled.code`
  color: white;
  white-space: pre;

  display: flex;
  align-items: center;

  font-family: monospace;

  position: fixed;

  background-color: #000000dd;

  overflow: hidden;
  max-width: 300px;
  width: 100%;
  height: 100vh;
  right: 0;
  top: 0;

  animation: fadeIn 0.3s;

  p {
    padding: 20px;
  }
`;
