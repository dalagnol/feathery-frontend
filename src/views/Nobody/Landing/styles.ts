import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/screens";

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin: 10px;

  font-family: Helvetica, sans-serif;
  
  ${iPhone(`
    font-size: 15px;
  `)} ${iPad(`
    font-size: 20px;
  `)} ${Mac(`
    font-size: 20px;
  `)};
`;
