import styled from "styled-components";

export const Container = styled.div<any>`
  max-width: 300px;
  overflow-y: scroll;

  max-height: calc(100vh - ${({ large }: any) => (large ? "360px" : "210px")});
`;
