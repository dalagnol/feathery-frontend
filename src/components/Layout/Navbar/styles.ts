import styled from "styled-components";
import { Bars } from "styled-icons/fa-solid/Bars";
import { UserCircle } from "styled-icons/fa-solid/UserCircle";

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

  ${({ sidebarOpen }) =>
    sidebarOpen &&
    `
    transform: translateY(-100%);
  `}
`;

export const Button = styled.button<any>`
  cursor: pointer;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
  border: none;

  font-size: 1em;

  width: 100px;
  box-sizing: border-box;

  text-align: ${({ left, right }) =>
    left ? "left" : right ? "right" : "center"};

  margin: 10px;
`;

export const SidebarButton = styled(Bars)`
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
