import styled from "styled-components";

import { iPhone, Mac } from "styles/screens";

export const Form = styled.form`
  padding-top: 50px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  flex: 1;

  ${iPhone(`
      display: flex;
      align-items: center;
      flex-direction: column;

      padding: 0px;
  `)}
`;

export const Header = styled.header`
  padding-top: 20px;

  height: 200px;
  width: 100%;

  display: flex;
  flex-direction: column;

  flex: 0.45;

  align-items: center;

  ${iPhone(`
    flex: 1;
    height: 400px;
  `)}
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 0.45;

  input,
  & > div {
    margin: 10px 0px 20px 0px;
  }

  ${iPhone(`
    flex: 1;

    padding: 20px;
  `)}
`;

export const User = styled.div`
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 0px 50px ${({ theme }) => theme.shadowy};

  width: 300px;
  height: 300px;

  ${Mac(`
    min-width: 400px;
    min-height: 400px;
  `)}
`;

export const Buttons = styled.header`
  display: flex;
  flex-direction: row;
  flex: 1;

  margin: 0px;

  justify-content: space-between;
`;

export const SelectContainer = styled.div`
  margin: 5px 0px;
  width: 100%;
  height: 50px;

  .SelectContainer {
    border-radius: 5px;
    padding: 0px;
    position: relative;
  }
`;

export const Handler = styled.p`
  font: 1em Nanum Gothic;
  color: ${({ theme }) => theme.secondary};
`;
