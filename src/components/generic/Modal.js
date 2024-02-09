import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { colors } from "@/config/colors";
import SocialMediaList from "./SocialMediaList";


const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  min-width: 100vw;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;
const Wrap = styled.div`
  max-width: 720px;
  width: 100%;
  background-color: ${colors.border};
  padding: 40px;
  border-radius: 4px;
  min-height: 541px;
  display: flex;
  flex-direction: column;
  gap: 20px;
    justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: ${colors.boxShadow};
  @media only screen and (max-width: 575px) {
    padding: 50px 15px;
    min-height: 561px;
  }
`;
const Item = styled(Link)`

display: flex;
align-items: center;
justify-content: center;
gap: 5px;
text-decoration: none;
color: ${colors.mainText};
transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
font-size: 18px;
:hover {
    color: ${colors.tealColor};

    p {
        text-decoration: underline;
    }
}
`

const Modal = ({ closeModal = () => {} }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  
  return (
    <Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <Wrap>
      


            <Item href={'tel:35799797975'}>
                <FaPhoneAlt/>
                <p>{'+357-99797975'}</p></Item>
            <Item href={'mailto:lena@gmail.com'}>
                <TfiEmail/><p>{'lena@gmail.com'}</p></Item>
                <SocialMediaList/>
            
      </Wrap>
    </Backdrop>
  );
};

export default Modal;
