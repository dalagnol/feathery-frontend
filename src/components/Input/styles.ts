import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/screens";

export const Input = styled.input<any>`
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};

    font-size: 20px;

    border: none;
    border-radius: 5px;

    margin: 10px;
    padding: 10px;

    height: 30px; 

    ${iPhone(`
    width: 290px;
    `)}

    ${iPad(`
    width: 350px;
    `)}

    ${Mac(`
    width: 350px;
    `)}

    transition: all 0.22s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 10px #00000044;
        background-color: ${({ theme }) => theme.tertiary};
    }

    &:focus {
        box-shadow: 0px 0px 10px #00000044;
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.primary};
    }

    ${({ shake }) =>
      shake &&
      `
        animation: shake 0.4s;
    `}
`;
