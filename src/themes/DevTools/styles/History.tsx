import styled from "styled-components";
import "styles/animations";

export const Container = styled.div<any>`
  padding: 10px;
  font-size: 0.9em;
  background-color: #00000044;
  transition: all 0.2s ease-in;

  overflow-y: scroll;
  max-height: ${({ open }) => (open ? "300px" : "0px")};
  min-height: ${({ open }) => (open ? "300px" : "0px")};

  * {
    animation: slideDown 0.3s;
  }

  div {
    div {
      display: flex;
      font-size: 0.8em;
      justify-content: space-between;
      opacity: 0.5;
    }
  }
`;
