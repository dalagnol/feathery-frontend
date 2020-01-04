import styled from "styled-components";
import Theme from "themes";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: ${() => Theme.d.primary};
`;

export const Title = styled.h1`
  color: ${() => Theme.d.text};
`;

export const Button = styled.button`
  color: ${() => Theme.d.text};
  border-color: ${() => Theme.d.blurry};
  background-color: ${() => Theme.d.primary};

  font-size: 1em;
  border-radius: 10px;

  padding: 10px 30px;
`;
