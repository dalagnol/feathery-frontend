import styled from "styled-components";
import { Light, Dark } from "themes";

const Theme = Light;

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

  background-color: ${Theme.primary};
`;

export const Title = styled.h1`
  color: ${Theme.text};
`;

export const Button = styled.button`
  color: ${Theme.text};
  border-color: ${Theme.blurry};
  background-color: ${Theme.primary};

  font-size: 1em;
  border-radius: 10px;

  padding: 10px 30px;
`;
