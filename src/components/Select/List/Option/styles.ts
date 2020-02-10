import styled from "styled-components";
import { Check as Icon } from "styled-icons/feather";

export const Container = styled.div<any>`
  display: flex;
  flex: 1;

  height: 60px;

  align-items: center;
  padding: 0px 10px;

  cursor: pointer;

  transition: all 0.3s ease-in-out;

  p {
    text-indent: 2.5em;
  }

  &:hover {
    background-color: ${({ theme, open }) => open && `${theme.text}bb`};

    &,
    * {
      color: ${({ theme, open }) => open && theme.primary};
    }
  }
`;

export const Check = styled(Icon)`
  margin-right: -30px;
`;
