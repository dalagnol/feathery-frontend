import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/Screens";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 49px;

  position: absolute;

  background-color: black;
  border-top: 1px solid ${({ theme }) => theme.blurry};

  box-sizing: border-box;
  margin: 0;
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
