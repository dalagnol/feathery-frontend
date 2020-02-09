import styled from "styled-components";
import { ArrowDown } from "styled-icons/feather";

export const Container = styled.div<any>`
  display: flex;
  flex: 1;

  height: 100%;

  transition: all 0.3s ease-in-out;

  &,
  & > div:not(.noborder) {
    background-color: ${({ theme, open }) =>
      `${theme.primary}${open ? "ef" : "6c"}`};

    box-shadow: 0px 0px
      ${({ open, closing }) => (open && !closing ? "50px" : "2px")}
      ${({ theme }) => `${theme.shadowy}`};
  }

  padding: 0px 15px;

  z-index: 100;

  border-bottom: 1px dashed ${({ theme }) => `${theme.secondary}66`};

  * {
    font: 1em Nanum Gothic;
    color: ${({ theme }) => theme.text};
  }
`;

export const Box = styled.div`
  display: flex;
  flex: 1;

  cursor: pointer;

  padding: 0px 15px;

  z-index: 100;

  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled<any>(ArrowDown)`
  height: 32px;
  width: 32px;

  transition: all 0.3s ease-in-out;

  ${({ open, closing }) => open && !closing && `transform: rotate(180deg)`};
`;
