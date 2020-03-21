import styled from "styled-components";

interface Props {
  open?: boolean;
}

export const Header = styled.header<Props>`
  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 255),
      rgba(255, 255, 255, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Icons = styled.div`
  * {
    cursor: pointer;
  }
`;

export const Names = styled.div`
  display: flex;
  p {
    font-size: 1.7em;
    margin: 0px 10px;
    cursor: pointer;

    &.Damp {
      opacity: 0.5;
    }
  }
`;

export const Title = styled.h1<Props>`
  cursor: pointer;

  ${({ open }) => !open && `font-size: 2em;`}
`;
