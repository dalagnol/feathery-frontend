import styled from "styled-components";
import { Translate } from "styled-icons/material/Translate";

export const LangIcon = styled(Translate)`
  width: 24px;
  height: 24px;

  color: ${({ theme }) => theme.text};

  margin-left: 13px;
`;

export const Container = styled.div`
  position: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
`;
