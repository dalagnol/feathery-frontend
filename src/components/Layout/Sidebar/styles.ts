import styled from "styled-components";
import { Home } from "styled-icons/feather/Home";
import { Users } from "styled-icons/feather/Users";
import { iPhone } from "styles/screens";

export const Container = styled.div<any>`
  position: fixed;

  top: 0;
  left: 0;

  min-height: 100vh;
  min-width: 100vw;

  max-height: 100vh;
  max-width: 100vw;

  background-color: ${({ theme }) => `${theme.primary}bb`};

  z-index: 10000;

  transition: all 0.4s ease-in-out;

  animation: fadeIn 1s;

  overflow: hidden;

  ${({ closing }) =>
    closing &&
    `
    opacity: 0;
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.primary};
`;

export const Sidebar = styled.aside<any>`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  top: 0;
  left: 0;

  width: 400px;
  height: 100%;

  ${iPhone(`
    width: 85vw;
  `)}

  background-color: ${({ theme }) => theme.primary};

  box-shadow: 0px 0px 15px ${({ theme }) => theme.shadowy};

  transition: all 0.6s ease-in-out;

  animation: slideRight 0.6s;

  ${({ closing }) =>
    closing &&
    `
    transform: translateX(-100%);
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.text};

  font-family: Arial, Helvetica, sans-serif;
  font-size: 23px;

  margin: 10px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;

export const Button = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: row;

  align-items: center;

  border: none;

  background-color: ${({ theme }) => theme.primary};

  width: 100%;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};

    * {
      transition: all 0.3s ease-in-out;

      color: ${({ theme }) => theme.text};
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const FeedIcon = styled(Home)`
  color: ${({ theme }) => theme.tertiary};

  height: 40px;
  width: 40px;

  margin-left: 5px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;

export const AboutUsIcon = styled(Users)`
  color: ${({ theme }) => theme.tertiary};

  height: 40px;
  width: 40px;

  margin-left: 5px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;
