import styled from "styled-components";
import { Menu } from "styled-icons/feather/Menu";
import { UserCircle } from "styled-icons/fa-solid/UserCircle";
import { iPhone } from "styles/screens";

export const Navbar = styled.header<any>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 49px;

  background-color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.blurry};
  box-sizing: border-box;

  transition: all 0.4s ease-in-out;

  ${iPhone(`
    p {
      display: none;
    }
  `)}

  ${({ sidebarOpen, closingSidebar }) =>
    sidebarOpen &&
    !closingSidebar &&
    `
    transform: translateY(-100%);
  `}
`;

export const Button = styled.button<any>`
  display: flex;
  flex-direction: row;

  cursor: pointer;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
  border: none;

  font-size: 1em;

  box-sizing: border-box;

  text-align: ${({ left, right }) =>
    left ? "left" : right ? "right" : "center"};

  margin: 10px;
`;

export const SidebarButton = styled(Menu)`
  color: ${({ theme }) => theme.text};

  height: 20px;
  width: 20px;

  transition: all 0.4s ease-in-out;

  &:hover {
    text-shadow: 0px 0px 10px ${({ theme }) => theme.shadowy};
  }
`;

export const UserButton = styled(UserCircle)`
  color: ${({ theme }) => theme.text};

  height: 22px;
  width: 22px;

  transition: all 0.4s ease-in-out;

  &:hover {
    text-shadow: 0px 0px 10px ${({ theme }) => theme.shadowy};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.text};

  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;

  margin: 5px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;

export const Side = styled.div<any>`
  display: flex;
  flex: 0.49;

  ${({ right }) => right && `justify-content: flex-end`};
`;

export const Middle = styled.div`
  display: flex;
  flex: 0.01;
`;
