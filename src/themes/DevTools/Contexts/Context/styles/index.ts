import styled from "styled-components";

interface Props {
  open?: boolean;
  name?: string;
  count?: number;
}

export const Container = styled.div<Props>`
  max-height: ${({ open, count }) =>
    open ? String((count || 1) * 60) + "px" : "50px"};
  overflow: hidden;

  margin: ${({ open }) => open && "10px 0px"};
  transform: ${({ open }) => open && "scale(0.99, 0.99)"};

  transition: all 0.3s ease-in-out;

  > header {
    h1 {
      ${({ open }) => open && `margin-left: 10px;`}
      ${({ open, name }) =>
        open && name && name.length > 20 && `font-size: 1.2em;`}
    }
  }

  animation: slideDown 1s;
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

  padding: 0px 10px;

  background-color: #00000044;
`;
