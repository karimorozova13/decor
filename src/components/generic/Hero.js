import React from "react";
import Section from "./Section";
import Container from "./Container";
import { colors } from "@/config/colors";
import styled from "styled-components";
import CommonImage from "./CommonImage";
import Title from "./Title";
import Subtitle from "./Subtitle";

const Sides = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;
const LeftSide = styled.div`
  width: calc(100% / 2);
`;
const RightSide = styled.div`
  width: calc(100% / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const Hero = () => {
  return (
    <Section pt={0} bg={colors.mainAccent}>
      <Container pl={100}>
        <Sides>
          <LeftSide>
            <CommonImage source={"/images/hero.jpg"} width={640} height={787} />
          </LeftSide>
          <RightSide>
            <Title title={" Your page content "} />
            <Subtitle
              des={
                "Homey Interiors | Interior design website, Interior design website templates, Interior design brand"
              }
            />
          </RightSide>
        </Sides>
      </Container>
    </Section>
  );
};

export default Hero;
