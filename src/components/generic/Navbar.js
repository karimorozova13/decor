import React, { useState } from "react";
import styled from "styled-components";
import { TbMenu } from "react-icons/tb";
import { CiLock, CiUnlock } from "react-icons/ci";
import { colors } from "@/config/colors";
import Container from "./Container";
import { RiContactsLine } from "react-icons/ri";
import Modal from "./Modal";
import NavbarLinks from "./NavbarLinks";
import { useRef } from "react";
import useOnClickOutside from "../../../utils/hooks/useOnClickOutside";

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media only screen  and (max-width: 767px) {
    background-color: ${colors.bgAlpha};

  }
z-index:2;
 
`;
const Icons = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
gap: 10px;
padding: 10px 0;
`
const MenuIcon = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secodaryText};
  cursor: pointer;
  transform: ${({ isSubmenu }) => (!isSubmenu ? "rotate(0)" : "rotate(90deg)")};
  svg {
    transition: 250ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  :hover {
    svg {
      color: ${colors.mainWhite};
    }
  }
  @media only screen and (max-width: 767px) {
    color: ${colors.mainBlack};
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
  @media only screen and (max-width: 991px) {
    color: ${colors.mainBlack};
    background-color: rgba(255, 255, 255, 0);
  }
`;

const Navbar = () => {
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const ref = useRef()
  useOnClickOutside(ref, ()=>setIsSubmenu(false))
  return (
    <Wrap ref={ref}>
      <Container>
<Icons>

      <MenuIcon isSubmenu={isSubmenu} onClick={() => setIsSubmenu(!isSubmenu)}>
        <TbMenu size={30} />
      </MenuIcon>
      <LogIcon onClick={() => setIsLogin(!isLogin)}>
      <RiContactsLine size={20}/>
      </LogIcon>
</Icons>
      </Container>
      {isLogin && <Modal closeModal={()=> setIsLogin(false)}/>}
      {isSubmenu && <NavbarLinks openModal={()=>setIsLogin(true)} closeMenu={()=>setIsSubmenu(false)}/>}

    </Wrap>
  );
};

export default Navbar;
