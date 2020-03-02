import styled from "styled-components";

interface Props {
  open?: boolean;
}

export const Container = styled.aside<Props>`
  &,
  * {
    transition: all 0.3s ease-in-out;
    color: white;
  }

  background-color: #00000044;

  position: fixed;
  right: 0;
  top: 0;

  height: 100vh;
  width: 300px;
  max-height: 100vh;

  font: 0.7em Nanum Gothic;

  ${({ open }) => `
    max-height: ${!open ? "60px" : "100vh"};
    max-width: ${open ? "300px" : "180px"};

    > header {
      padding: ${open ? "10px 40px" : "0px 30px"};

      ${!open && "margin: -20px;"}
    }
  `}

  * {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  border-left: dashed 1px #ffffff22;
`;

export const Code = styled.code`
  color: white;
  white-space: pre;

  display: flex;
  align-items: center;

  font-family: monospace;

  position: fixed;

  background-color: #000000dd;

  overflow: hidden;
  max-width: 300px;
  width: 100%;
  height: 100vh;
  right: 0;
  top: 0;

  animation: fadeIn 0.3s;

  p {
    padding: 20px;
  }
`;
