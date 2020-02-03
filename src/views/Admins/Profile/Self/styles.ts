import styled from "styled-components";

import { iPhone, iPad, Mac } from "styles/screens";

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
  `)}
`;

export const Header = styled.header`
  height: 200px;
  width: 100%;

  display: flex;
  flex-direction: column;

  flex: 0.5;

  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 0.5;

  width: 100%;

  & > * {
    margin: 10px;
  }
`;

export const UserPictureContainer = styled.div`
  div {
    box-shadow: 0px 0px 50px ${({ theme }) => theme.shadowy};
  }

  ${iPhone(`
    width: 300px;
    height: 300px;
  `)}
  ${iPad(`
    width: 300px;
    height: 300px;
  `)}
  ${Mac(`
    width: 400px;
    height: 400px;
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
  height: 45px;

  padding: 0px 10px;

  .SelectContainer {
    border-radius: 10px;
    padding: 0px;
    position: relative;
  }
`;
