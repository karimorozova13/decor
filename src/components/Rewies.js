import React from "react";

import { colors } from "@/config/colors";

import Slider from "./generic/Slider";
import Container from "./generic/Container";
import Section from "./generic/Section";

const Rewies = () => {
  return (
    <div id="reviews">
      <Section pt={0} pb={0} bg={colors.mainWhite} borBot={colors.border}>
        <Container>
          <Slider />
        </Container>
      </Section>
    </div>
  );
};

export default Rewies;
