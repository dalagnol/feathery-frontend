import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/Screens";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.secondary}

  height: auto;

  margin: 15px;
  padding: 20px;

  max-width: 900px;

  ${iPhone(`
    width: 65%;
    padding: 40px;
    border-radius: 175px;
    flex-direction: column;
  `)}

  ${iPad(`
    width: 80%;
    padding: 40px;
    border-radius: 115px;
    flex-direction: row;
  `)}

  ${Mac(`
    width: 80%;

    border-radius: 90px;
    flex-direction: row;
  `)}
`;

export const Texts = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  flex: 4;
  height: auto;

  margin: 10px 10px 50px 10px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};

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

export const Subheading = styled.h1`
  color: ${({ theme }) => theme.text};

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

export const Images = styled.div`
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
