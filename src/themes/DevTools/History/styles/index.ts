import styled from "styled-components";

export const Container = styled.div<any>`
  * {
    transition: all 0.3s ease-in-out;
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
  max-height: ${({ open }) => (open ? "200px" : "45px")};
  height: 200px;
  overflow-y: scroll;
  opacity: 0.9;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 300px;

  z-index: 1;

  background-color: #000000ff;

  > div {
    * {
      margin: 0px 4px;
      cursor: pointer;

      &:hover {
        opacity: 1 !important;
      }
    }
  }
`;

export const Title = styled.h2`
  cursor: pointer;
`;
