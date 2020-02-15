import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/screens";
import { Check } from "styled-icons/feather";

export const Container = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 500px;

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
  color: ${({ theme }) => theme.secondary};
  margin: 10px auto;

  font-family: Nanum Gothic, sans-serif;

  text-align: justify;
  
  ${iPhone(`
    font-size: 15px;
  `)} ${iPad(`
    font-size: 19px;
  `)} ${Mac(`
    font-size: 19px;
  `)};
`;
