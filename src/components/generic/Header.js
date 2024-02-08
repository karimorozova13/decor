import React from "react";
import styled from "styled-components";
import { TbMenu } from "react-icons/tb";
import { CiLock } from "react-icons/ci";
import { colors } from "@/config/colors";

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px;
`;
const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secodaryText};
  cursor: pointer;
  svg {
    transition: 250ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  :hover {
    svg {
      color: ${colors.mainWhite};
    }
  }
`;
const LogIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secodaryText};
  cursor: pointer;
  svg {
    transition: 250ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  :hover {
    svg {
      color: ${colors.mainWhite};
    }
  }
`;

const Header = () => {
  return (
    <Wrap>
      <MenuIcon>
        <TbMenu size={30} />
      </MenuIcon>
      <LogIcon>
        <CiLock size={30} />
      </LogIcon>
    </Wrap>
  );
};

export default Header;
