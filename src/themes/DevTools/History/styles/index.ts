import styled from "styled-components";
import "styles/animations";

export const Container = styled.div<any>`
  * {
    transition: all 0.3s ease-in-out;
  }
  .Subheader {
    display: flex;
    p {
      color: white;
    }
  }
  background-color: #000000ee;
  h2 {
    background-color: #00000088;
    margin: 0px 5px;
    padding: 10px 0px;
  }
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-height: ${({ open }) => (open ? "200px" : "50px")};
  height: 200px;
  overflow-y: scroll;
  opacity: 0.9;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
`;

export const Title = styled.h2`
  cursor: pointer;
`;
