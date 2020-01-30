import styled from "styled-components";

export const Container = styled.div<any>`
  position: fixed;

  right: 0;

  min-height: 600px;
  min-width: 400px;

  margin: 5px 15px 0 0;

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

export const Sidebar = styled.aside<any>`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  top: 0;
  right: 0;

  width: 400px;
  height: 600px;

  margin-top: 18px;

  background-color: ${({ theme }) => theme.secondary};

  box-shadow: 15px 15px 20px ${({ theme }) => theme.shadowy};

  border-radius: 25px 5px 25px 25px;

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

  border: none;

  width: 100%;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ArrowUp = styled.div`
  width: 0;
  height: 0;

  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid ${({ theme }) => theme.secondary};

  border-radius: 15px;

  float: right;
`;
