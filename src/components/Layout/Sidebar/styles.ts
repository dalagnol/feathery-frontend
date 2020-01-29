import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  min-height: 100vh;
  min-width: 100vw;

  background-color: ${({ theme }) => `${theme.primary}bb`};

  z-index: 10000;
`;

export const Sidebar = styled.aside`
  position: fixed;

  display: flex;
  flex-direction: column;

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
