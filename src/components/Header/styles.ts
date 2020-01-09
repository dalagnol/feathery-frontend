import styled from "styled-components";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  margin-top: -10px;

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
