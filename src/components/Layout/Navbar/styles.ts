import styled from "styled-components";
import { Menu } from "styled-icons/feather/Menu";
import { User } from "styled-icons/evil";
import { List } from "styled-icons/feather";

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

  * {
    border-sizing: border-box;
  }

  div {
    div {
      img {
        width: 100%;
      }
    }
  }

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

  align-items: center;

  border-sizing: border-box;

  margin: 0px;

  font-size: 0.8em;

  min-width: 60px;
  width: 60px;
  max-width: 60px;

  div {
    width: 42px;
    height: 42px;

    border-radius: 50%;

    overflow: hidden;
  }

  text-align: ${({ left, right }) =>
    left ? "left" : right ? "right" : "center"};
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

export const UserButton = styled(User)`
  color: ${({ theme }) => theme.text};

  height: 42px;
  width: 42px;

  transition: all 0.4s ease-in-out;

  &:hover {
    text-shadow: 0px 0px 10px ${({ theme }) => theme.shadowy};
  }
`;

export const Notifications = styled(List)`
  color: ${({ theme }) => theme.text};

  cursor: pointer;

  height: 30px;
  width: 30px;

  transition: all 0.4s ease-in-out;

  &:hover {
    text-shadow: 0px 0px 10px ${({ theme }) => theme.shadowy};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.text};

  font-family: Helvetica, sans-serif;
  font-size: 16px;

  margin: 5px;

  text-shadow: 0px 0px 30px ${({ theme }) => theme.shadowy};
`;

export const Side = styled.div<any>`
  display: flex;
  flex: 0.49;

  align-items: center;

  padding: 0px 10px;

  div {
    display: flex;
    align-items: center;
  }

  ${({ right }) => right && `justify-content: flex-end`};
`;

export const Middle = styled.div`
  display: flex;
  flex: 0.01;
`;
