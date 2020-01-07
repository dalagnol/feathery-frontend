import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const CreatorContainer = styled.div<ITheme>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ secondary }) => secondary}

  width: 80vw;
  height: auto;

  margin: 15px;
  padding: 50px;

  ${iPhone(`
    border-radius: 165px;
    flex-direction: column;
  `)}

  ${iPad(`
    border-radius: 115px;
    flex-direction: row;
  `)}

  ${Mac(`
    border-radius: 90px;
    flex-direction: row;
  `)}
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: column;

  width: 75vw;
  height: auto;
`;

export const Paragraph = styled.p<ITheme>`
  color: ${({ text }) => text};

  text-align: justify;

  ${iPhone(`
    font-size: 20px;
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

export const Subheading = styled.h1<ITheme>`
  color: ${({ text }) => text};

  font-family: AmaticSC;

  width: 90%;

  ${iPhone(`
    font-size: 30px;
  `)}

  ${iPad(`
    font-size: 35px;
  `)}

  ${Mac(`
    font-size: 35px;
  `)}
`;

export const Image = styled.img`
  border-radius: 50%;

  margin: 10px;

  ${iPhone(`
    width: 300px;
    height: 300px;
  `)}

  ${iPad(`
    width: 200px;
    height: 200px;
  `)}

  ${Mac(`
    width: 150px;
    height: 150px;
  `)}
`;
