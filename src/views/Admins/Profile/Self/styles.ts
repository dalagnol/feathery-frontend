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

      padding: 0px;
  `)}
`;

export const Header = styled.header`
  height: 200px;
  width: 100%;

  display: flex;
  flex-direction: column;

  flex: 0.5;

  align-items: center;

  ${iPhone(`
    flex: 1;
    height: 400px;
  `)}
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 0.5;

  input,
  & > div {
    margin: 10px 0px 20px 0px;
  }

  ${iPhone(`
    flex: 1;

    padding: 20px;
  `)}
`;

export const UserPictureContainer = styled.div`
  div {
    box-shadow: 0px 0px 50px ${({ theme }) => theme.shadowy};
  }

  width: 300px;
  height: 300px;

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
  height: 50px;

  .SelectContainer {
    border-radius: 5px;
    padding: 0px;
    position: relative;
  }
`;
