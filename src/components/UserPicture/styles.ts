import styled from "styled-components";
import { User } from "styled-icons/evil";

export const Container = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;

export const UserIcon = styled(User)`
  width: 100%;

  color: ${({ theme }) => theme.text};
`;
