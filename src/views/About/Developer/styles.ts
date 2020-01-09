import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const CreatorContainer = styled.div<ITheme>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ secondary }) => secondary}

  height: auto;

  margin: 15px;
  padding: 20px;

  ${iPhone(`
    width: 65%;

    border-radius: 175px;
    flex-direction: column;
  `)}

  ${iPad(`
    width: 80%;

    border-radius: 115px;
    flex-direction: row;
  `)}

  ${Mac(`
    width: 80%;

    border-radius: 90px;
    flex-direction: row;
  `)}
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  flex: 4;
  height: auto;

  margin: 10px 10px 50px 10px;
`;

export const Paragraph = styled.p<ITheme>`
  color: ${({ text }) => text};

  text-align: justify;
  width: 90%;

  ${iPhone(`
    font-size: 18px;
    margin: 0 2%;
    width: 100%;
  `)}

  ${iPad(`
    font-size: 20px;
    margin: 0 5%;
  `)}

  ${Mac(`
    font-size: 20px;
    margin: 0 10%;
  `)}
`;

export const Subheading = styled.h1<ITheme>`
  color: ${({ text }) => text};

  font-family: Amatic SC;
  width: 90%;


  ${iPhone(`
    font-size: 30px;
    margin: 0 2%;
    width: 100%;
  `)}

  ${iPad(`
    font-size: 35px;
    margin: 0 5%;
  `)}

  ${Mac(`
    font-size: 35px;
    margin: 0 10%;
  `)}
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  flex: 1;
`;

export const Image = styled.img`
  border-radius: 50%;

  display: flex;

  max-width: 200px;
  max-height: 200px;

  ${iPhone(`
    width: 250px;
    height: 250px;
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
