import React from "react";
import styled from "styled-components";

import useWindowSize from "../../utils/hooks/useWindowSize";
import { colors } from "@/config/colors";

import Section from "./generic/Section";
import Container from "./generic/Container";
import CommonImage from "./generic/CommonImage";
import Title from "./generic/Title";
import Subtitle from "./generic/Subtitle";
import Sides from "./generic/Sides";
import LeftSide from "./generic/LeftSide";
import RightSide from "./generic/RightSide";

const Logo = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 60px;
  p {
    font-style: italic;
    font-family: "Georgia Italic", cursive;
    color: ${colors.mainWhite};
    font-size: 24px;
    transform: rotate(-90deg);
    min-width: 267px;
    text-align: center;
    span {
      font-size: 35px;
      font-weight: 700;
      padding-right: 5px;
    }
  }
`;

const Hero = () => {
  const { width } = useWindowSize();
  const pl = width < 991 ? 0 : 100;
  const pr = width < 768 ? 0 : 15;
  return (
    <Section pt={0} bg={colors.mainAccent}>
      {width > 849 && (
        <Logo>
          <p>
            <span>{"Celebration"}</span>
            {" decor"}
          </p>
        </Logo>
      )}

      <Container pl={pl} pr={pr}>
        <Sides>
          <LeftSide>
            <CommonImage source={"/images/hero.jpg"} width={640} height={787} />
          </LeftSide>
          <RightSide>
            <Title title={"Hi! We are Celebration decor"} />
            <Subtitle
              des={"Our team is helping you making your event unforgettable"}
            />
          </RightSide>
        </Sides>
      </Container>
    </Section>
  );
};

export default Hero;
