import styled from "styled-components";
import Link from "next/link";

import { colors } from "@/config/colors";

const Popup = styled.div`
  position: absolute;
  top: 100%;
  right: 10px;
  border-radius: 10px;
  background-color: ${colors.mainWhite};
  padding: 30px 15px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: ${colors.boxShadow};
`;
const Des = styled(Link)`
  color: ${colors.secodaryText};
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    opacity: 0;
    position: absolute;
    top: 110%;
    left: 0;
    width: 95%;
    height: 3px;
    background-color: ${colors.tealColor};
    z-index: 1;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

const NavbarLinks = ({ closeMenu, openModal }) => {
  return (
    <Popup
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeMenu();
        }
      }}
    >
      <Des
        onClick={() => {
          closeMenu();
        }}
        href={"/#about"}
      >
        {"Meet us"}
      </Des>
      <Des
        onClick={() => {
          closeMenu();
        }}
        href={"/#what"}
      >
        {"Explore Our Services"}
      </Des>
      <Des
        onClick={() => {
          closeMenu();
        }}
        href={"/#reviews"}
      >
        {"Our reviews"}
      </Des>
      <Des
        onClick={() => {
          closeMenu();
        }}
        href={{ pathname: "/gallery", query: { category: "Wedding" } }}
      >
        {"View our work"}
      </Des>

      <Des
        onClick={() => {
          openModal();
          closeMenu();
        }}
        as={"div"}
      >
        {"Contact us"}
      </Des>
    </Popup>
  );
};

export default NavbarLinks;
