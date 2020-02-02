import styled from "styled-components";
import { iPhone } from "styles/screens";

export const Background = styled.div<any>`
  position: fixed;

  right: 0;

  display: flex;
  justify-content: flex-end;

  min-height: 100vh;
  min-width: 100vw;

  background-color: ${({ theme }) => `${theme.primary}bb`};

  z-index: 10000;

  transition: all 0.4s ease-in-out;

  animation: fadeIn 1s;

  ${({ closing }) =>
    closing &&
    `
    opacity: 0;
  `}
`;

export const Container = styled.div`
  position: relative;

  max-width: 320px;

  border-sizing: border-box;

  * {
    border-sizing: border-box;
  }
`;

export const Popup = styled.div<any>`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  top: 0;
  right: 0;

  width: 200px;
  height: auto;

  margin: 25px 57px 0 0;

  background-color: ${({ theme }) => theme.blurry};

  box-shadow: ${({ theme }) =>
    theme.primary === "#000000"
      ? "0px 0px 0px #000000"
      : `15px 15px 20px ${theme.shadowy}`};

  border-radius: 25px 0px 25px 25px;

  transition: all 0.6s ease-in-out;

  animation: slideLeft 0.6s;

  ${({ closing }) =>
    closing &&
    `
    transform: translateX(100%);
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.text};

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8em;

  margin: 10px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;

  background-color: ${({ theme }) => theme.blurry};

  display: flex;
  flex-direction: row;

  align-items: center;

  border: none;
  border-radius: 15px;

  width: 100%;

  transition: all 0.3s ease-in-out;

  * {
    transition: all 0.3s ease-in-out;

    color: ${({ theme }) => theme.text};
  }

  &:hover {
    background-color: ${({ theme }) => theme.primary};

    * {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const ArrowUp = styled.div<any>`
  position: absolute;
  right: 40px;

  width: 0;
  height: 0;

  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid ${({ theme }) => theme.shadowy};

  border-radius: 15px;

  margin: 5px 15px 0 0;

  transition: all 0.6s ease-in-out;

  animation: slideLeft 0.6s;

  ${({ closing }) =>
    closing &&
    `
    transform: translateX(100%);
  `}
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.tertiary};

  height: 40px;
  width: 40px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;
