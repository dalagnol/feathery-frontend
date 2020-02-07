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
  width: 100%;

  display: flex;
  flex-direction: column;

  ${Mac(`
    flex: 0.4;
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

  text-shadow: 0px 0px 10px ${({ theme }) => `${theme.shadowy}44`};
  
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

  margin: 5px;

  text-shadow: 0px 0px 50px ${({ theme }) => theme.shadowy};
`;

export const PhoneIcon = styled(Phone)`
  color: ${({ theme }) => theme.secondary};

  height: 32px;
  width: 32px;

  margin: 5px;

  text-shadow: 0px 0px 50px ${({ theme }) => theme.shadowy};
`;

export const Main = styled.main`
  display: flex;

  width: 100%;

  & > * {
    margin: 10px;
  }

  ${iPhone(`
    flex-direction: column;
  `)} ${iPad(`
    flex-direction: row;
    margin-top: 55px;
  `)} ${Mac(`
    flex-direction: column;
    flex: 0.6;
    margin-top: 55px;
  `)};
`;

export const Bio = styled.div`
  display: flex;

  text-align: justify;

  margin-left: 45px;
  padding: 20px;

  background-color: ${({ theme }) => theme.blurry};

  border-radius: 35px;

  transition: all 0.3s ease-in-out;

  box-shadow: 0px 0px 10px ${({ theme }) => `${theme.shadowy}22`};

  ${iPhone(`
    flex: 0.4;
    margin: 10px 40px;
  `)} ${iPad(`
    flex: 0.4;
  `)} ${Mac(`
    flex: 0.5;
    margin: 10px 40px;
  `)};

  &:hover {
    box-shadow: 0px 0px 10px ${({ theme }) => `${theme.shadowy}44`};
  }
`;

export const Infos = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;

  margin: 20px 40px;

  ${iPad(`
    margin-right: 45px;
  `)};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.blurry};

  border-radius: 50px;

  padding: 20px;

  box-shadow: 0px 0px 10px ${({ theme }) => `${theme.shadowy}22`};

  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px ${({ theme }) => `${theme.shadowy}44`};
  }
`;
