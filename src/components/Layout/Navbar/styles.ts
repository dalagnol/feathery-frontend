import styled from "styled-components";

export const Navbar = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.blurry};
`;

export const Button = styled.button`
  cursor: pointer;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
  border: none;

  font-size: 1em;

  margin: 10px;
`;
