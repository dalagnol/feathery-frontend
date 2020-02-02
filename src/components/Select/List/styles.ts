import styled from "styled-components";

export const Container = styled.div<any>`
  display: flex;
  flex-direction: column;

  max-height: 300px;

  overflow-y: scroll;
  overflow-x: hidden;

  background-color: ${({ theme }) => `${theme.tertiary}33`};

  position: absolute;

  margin-top: 60px;

  border-radius: 10px;

  width: 100%;

  min-height: 60px;
  height: auto;

  z-index: 50;

  box-shadow: 0px 0px 50px ${({ theme }) => `${theme.shadowy}77`};

  animation: ${({ closing }) =>
    closing ? "slideUp 0.5s, fadeOut 0.3s" : "fadeIn 0.3s, slideDown 0.5s"};

  opacity: ${({ closing }) => closing && "0"};
`;

export const Options = styled.div``;
