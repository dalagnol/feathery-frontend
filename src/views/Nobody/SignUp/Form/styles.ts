import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/Screens";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Genders = styled.div`
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

export const Radios = styled.div`
  margin: 10px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.text};

  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
`;
