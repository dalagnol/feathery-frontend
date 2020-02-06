import styled from "styled-components";
import { iPhone, iPad, Mac } from "styles/screens";
import { Phone, Mail } from "styled-icons/feather";

export const Container = styled.main`
    display: flex;
    flex: 1;
    
    ${iPhone(`
        flex-direction: column;
    `)}
    ${iPad(`
        flex-direction: column;
    `)}
    ${Mac(`
        flex-direction: row;
    `)}
`;

export const Header = styled.header`
  height: 200px;
  width: 100%;

  display: flex;
  flex-direction: column;

  ${Mac(`
    flex: 0.5;
  `)};

  align-items: center;
`;

export const UserPictureContainer = styled.div`
  div {
    box-shadow: 0px 0px 50px ${({ theme }) => theme.shadowy};
  }

  ${iPhone(`
    width: 300px;
    height: 300px;
  `)}
  ${iPad(`
    width: 300px;
    height: 300px;
  `)}
  ${Mac(`
    width: 400px;
    height: 400px;
  `)}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin: 10px;

  font-family: Helvetica, sans-serif;
  
  ${iPhone(`
    font-size: 15px;
  `)} ${iPad(`
    font-size: 20px;
  `)} ${Mac(`
    font-size: 20px;
  `)};
`;

export const EmailIcon = styled(Mail)`
    color: ${({ theme }) => theme.secondary};
    
    height: 32px;
    width: 32px;

    text-shadow: 0px 0px 50px ${({ theme }) => theme.shadowy};
`;

export const PhoneIcon = styled(Phone)`
    color: ${({ theme }) => theme.secondary};
    
    height: 32px;
    width: 32px;

    text-shadow: 0px 0px 50px ${({ theme }) => theme.shadowy};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;

  width: 100%;

  & > * {
    margin: 10px;
  }

    ${Mac(`
    flex: 0.5;
  `)};
`;

export const Bio = styled.div`
  display: flex;
  flex: 0.5;

  text-align: justify;
`;

export const Info = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
`;