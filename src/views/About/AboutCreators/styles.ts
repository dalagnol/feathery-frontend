import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Container = styled.div<ITheme>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: ${({ secondary }) => secondary}

  width: 80vw;
  height: auto;

  margin: 15px;
  padding: 10px;

  border-radius: 90px;
`;

export const TextConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: columm;

  width: 75vw;
  height: auto;
`;

export const Paragraph = styled.p<ITheme>`
  color: ${({ text }) => text};
  text-align: justify;

  ${iPhone(`
    font-size: 10px;
    margin: 0 2vw;
  `)}

  ${iPad(`
    font-size: 20px;
    margin: 0 5vw;
  `)}

  ${Mac(`
    font-size: 20px;
    margin: 0 10vw;
  `)}
`;

export const Image = styled.img`
  border-radius: 50%;

  margin: 10px;

  width: 150px;
  height: 150px;
`;
