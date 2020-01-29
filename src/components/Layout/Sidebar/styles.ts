import styled from "styled-components";

export const Container = styled.div<any>`
  position: fixed;

  min-height: 100vh;
  min-width: 100vw;

  background-color: ${({ theme }) => `${theme.primary}bb`};

  z-index: 10000;

  transform: translateX(-100%);

  transition: all 0.5s ease-in-out;

  ${({ sidebarOpen }) =>
    sidebarOpen &&
    `
      transform: translateX(0);
  `}
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

export const Button = styled.aside`
  cursor: pointer;

  color: ${({ theme }) => theme.text};
  border: none;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;

  padding: 10px 30px;
  margin: 10px;

  transition: all 0.3s ease-in-out;

  &:hover {
    text-shadow: 0px 0px 10px ${({ theme }) => theme.shadowy};
  }
`;
