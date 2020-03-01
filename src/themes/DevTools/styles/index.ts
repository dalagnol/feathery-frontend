import styled from "styled-components";
import "styles/animations";

interface Props {
  open?: boolean;
}

export const Container = styled.aside<Props>`
  &,
  * {
    transition: all 0.3s ease-in-out;
    color: white;
  }

  background-color: #00000044;

  position: fixed;
  right: 0;
  top: 0;

  height: 100vh;
  width: 300px;
  max-height: 100vh;

  font-family: Nanum Gothic;

  ${({ open }) => `
    max-height: ${!open ? "60px" : "100vh"};
    max-width: ${open ? "300px" : "180px"};

    > header {
      padding: ${open ? "10px 40px" : "0px 30px"};

      ${!open && "margin: -20px;"}
    }
  `}

  * {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

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

export const Input = styled.input<any>`
  background-color: #00000000;
  border: none;

  font: 1em Nanum Gothic;

  outline: none;

  ${({ align }) =>
    !align &&
    `
    padding: 10px;

  min-width: 240px;

  `}

  animation: slideDown 0.5s;

  text-align: ${({ align }) => align || "left"};
`;
