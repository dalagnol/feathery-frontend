import styled from "styled-components";

interface Props {
  mini?: boolean;
  open?: boolean;
}

const minified = `
    display: flex;

    justify-content: center;
    align-items: center;
`;

export const Container = styled.aside<Props>`
  transition: all 0.3s ease-in-out;
  background-color: #00000044;

  position: fixed;
  right: 0;
  top: 0;

  height: 100vh;
  width: 300px;
  max-height: 100vh;

  font-family: Nanum Gothic;

  ${({ mini, open }) => `
    max-height: ${open || !mini ? "100vh" : "60px"};
    max-width: ${open || !mini ? "300px" : "180px"};
  `}

  ${({ mini }) => mini && minified}
`;

export const Header = styled.header<Props>`
  ${({ mini }) => (mini && minified) || `padding: 10px 40px;`}

  color: white;

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

export const Title = styled.h1<Props>`
  cursor: pointer;

  ${({ mini, open }) =>
    mini &&
    !open &&
    `
  font-size: 2em;
`};
`;
