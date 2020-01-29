import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/Screens";

export const Footer = styled.footer<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 49px;

  position: relative;

  background-color: black;
  border-top: 1px solid ${({ theme }) => theme.blurry};

  box-sizing: border-box;
  margin: 0;

  transition: all 0.4s ease-in-out;

  ${({ sidebarOpen }) =>
    sidebarOpen &&
    `
    transform: translateY(100%);

    position: fixed;
  `}
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.shadowy};
    margin: 10px;

    font-family: Amatic SC B;

    ${iPhone(`
    font-size: 15px;
    `)}

    ${iPad(`
    font-size: 20px;
    `)}

    ${Mac(`
    font-size: 20px;
    `)}
`;
