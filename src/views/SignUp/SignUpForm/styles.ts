import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;

  margin: 20px;
`;

export const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${iPhone(`
    width: 265px;
  `)}

  ${iPad(`
    width: 365px;
  `)}

  ${Mac(`
    width: 365px;
  `)}
`;

export const RadioBContainer = styled.div`
  margin: 10px;
`;

export const RadioButton = styled.input`
  font-size: 20px;

  border: none;
  border-radius: 5px;

  margin: 10px;
  padding: 10px;

  height: 30px;
`;

export const Label = styled.label<ITheme>`
  color: ${({ text }) => text};

  font-family: Amatic_SC;
  font-size: 30px;
`;
