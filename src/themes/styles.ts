import styled from "styled-components";

type HostProps = {
  DevTools: boolean;
};

export const Host = styled.div<HostProps>`
  transition: all 0.3s ease-in-out;
`;
