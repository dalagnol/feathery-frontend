import styled from "styled-components";
import { Home } from "styled-icons/typicons/Home";
import { People } from "styled-icons/material/People";

export const Container = styled.div<any>`
  position: fixed;

  min-height: 100vh;
  min-width: 100vw;

  background-color: ${({ theme }) => `${theme.primary}bb`};

  z-index: 10000;

  transform: translateX(-100%);

  transition: all 0.4s ease-in-out;

  ${({ sidebarOpen }) =>
    sidebarOpen &&
    `
      transform: translate(0, -50px);
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.secondary};
`;

export const Sidebar = styled.aside`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  top: 0;
  left: 0;

  width: 400px;
  height: 100%;

  background-color: ${({ theme }) => theme.primary};

  box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowy};
`;

export const Button = styled.button`
  cursor: pointer;

  color: ${({ theme }) => theme.text};
  border: none;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 23px;

  margin: 10px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const FeedIcon = styled(Home)`
  color: ${({ theme }) => theme.tertiary};

  height: 40px;
  width: 40px;

  margin-left: 5px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;

export const AboutUsIcon = styled(People)`
  color: ${({ theme }) => theme.tertiary};

  height: 40px;
  width: 40px;

  margin-left: 5px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;
