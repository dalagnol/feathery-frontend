import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/screens";

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};

  text-shadow: 0px 0px 10px ${({ theme }) => `${theme.shadowy}44`};

  margin: 0;

  font-family: Cookie;

  ${iPhone(`
    font-size: 40px;
  `)}

  ${iPad(`
    font-size: 65px;
  `)}

  ${Mac(`
    font-size: 65px;
  `)}
`;
