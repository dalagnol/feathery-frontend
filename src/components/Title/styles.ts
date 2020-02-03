import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/screens";

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};

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
