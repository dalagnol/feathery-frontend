import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/screens";

export const Subheading = styled.label`
  color: ${({ theme }) => theme.text};

  font-family: Amatic SC;

  ${iPhone(`
    font-size: 24px;

  `)}

  ${iPad(`
    font-size: 25px;
  `)}

  ${Mac(`
    font-size: 30px;
  `)}
`;
