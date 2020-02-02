import styled from "styled-components";
import { ArrowDown } from "styled-icons/feather";

export const Container = styled.div`
  display: flex;
  flex: 1;

  height: 100%;

  background-color: ${({ theme }) => theme.primary};
  border: 3px dotted ${({ theme }) => theme.text};

  padding: 0px 15px;

  * {
    font: 1em Nanum Gothic;
    color: ${({ theme }) => theme.text};
  }
`;

export const Box = styled.div`
  display: flex;
  flex: 1;

  cursor: pointer;

  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled<any>(ArrowDown)`
  height: 32px;
  width: 32px;

  transition: all 0.3s ease-in-out;

  ${({ open }) => open && `transform: rotate(180deg)`};
`;
