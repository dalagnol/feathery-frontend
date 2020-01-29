import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.primary};
`;

export const Content = styled.main<any>`
  width: 100%;
  min-height: calc(100vh - 99px);

  display: flex;
  align-items: center;
  flex-direction: ${({ row }) => (row ? "row" : "column")};

  ${({ center, row }) =>
    center && (row ? "justify-content: " : "align-items: ") + "center;"}

  ${({ around, row }) =>
    around && (row ? "justify-content: " : "align-items: ") + "space-around;"}

  ${({ between, row }) =>
    between && (row ? "justify-content: " : "align-items: ") + "space-between;"}

  margin: 50px 0px 0px 0px;

  transition: all 0.3s ease-in-out;

  ${({ sidebarOpen }) =>
    sidebarOpen &&
    `
      transform: translateX(200px);
    `}

  ${({ closingSidebar }) =>
    closingSidebar &&
    `
      transform: translateX(0);
    `}
`;
