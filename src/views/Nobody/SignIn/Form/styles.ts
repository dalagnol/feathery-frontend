import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/screens";

export const Container = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 300px;

  margin: 0px auto;

  * {
    margin: 10px 0px;
  }

  footer {
    display: flex;
    flex: 1;

    width: 100%;

    justify-content: center;
  }
`;

export const Text = styled.p`
  cursor: pointer;

  color: ${({ theme }) => theme.secondary};
  margin: 10px auto;

  font-family: Helvetica, sans-serif;
  
  ${iPhone(`
    font-size: 15px;
  `)} ${iPad(`
    font-size: 15px;
  `)} ${Mac(`
    font-size: 15px;
  `)};
`;
