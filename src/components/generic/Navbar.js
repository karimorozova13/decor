import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { TbMenu } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";

import { colors } from "@/config/colors";
import useOnClickOutside from "../../../utils/hooks/useOnClickOutside";

import Container from "./Container";
import Modal from "./Modal";
import NavbarLinks from "./NavbarLinks";

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: ${({ bg }) => bg};
  @media only screen and (max-width: 767px) {
    background-color: ${({ bg }) => bg};
  }
`;
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  position: relative;
`;
const Logo = styled(Link)`
  text-decoration: none;
  color: ${colors.secodaryText};
  font-family: "Georgia Italic", cursive;
  font-style: italic;
  font-size: 24px;
  min-width: 200px;
  padding-bottom: 5px;
  border-bottom: 2px solid ${colors.tealColor};
`;
const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px 0;
`;
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
  &:hover {
    svg {
      color: ${colors.tealColor};
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

  &:hover {
    svg {
      color: ${colors.tealColor};
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
  const [bg, setBg] = useState("transparent");

  const router = useRouter();
  const ref = useRef();

  useOnClickOutside(ref, () => setIsSubmenu(false));
  useEffect(() => {
    router.pathname === "/gallery"
      ? setBg(colors.mainAccent)
      : setBg(colors.bgAlpha);
  }, [router.pathname]);

  return (
    <Wrap ref={ref} bg={bg}>
      <Container>
        <InnerContainer>
          {router.pathname === "/gallery" && (
            <Logo href={"/"}>{"Celebration decor"}</Logo>
          )}

          <Icons>
            <MenuIcon
              isSubmenu={isSubmenu}
              onClick={() => setIsSubmenu(!isSubmenu)}
            >
              <TbMenu size={30} />
            </MenuIcon>
            <LogIcon
              onClick={() => {
                setIsLogin(!isLogin);
                setIsSubmenu(false);
              }}
            >
              <RiContactsLine size={20} />
            </LogIcon>
          </Icons>
          {isSubmenu && (
            <NavbarLinks
              openModal={() => setIsLogin(true)}
              closeMenu={() => setIsSubmenu(false)}
            />
          )}
        </InnerContainer>
      </Container>
      {isLogin && <Modal closeModal={() => setIsLogin(false)} />}
    </Wrap>
  );
};

export default Navbar;
