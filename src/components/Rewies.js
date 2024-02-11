import React from 'react'
import Slider from './generic/Slider'
import Container from "./generic/Container";
import Section from "./generic/Section";
import { colors } from '@/config/colors';

const Rewies = () => {
  return (
    <div id="reviews">
    <Section pt={0} pb={0} bg={colors.mainWhite} borderBottom={colors.border} >
                    <Container>
              <Slider/>
                    </Container>
    </Section></div>
  )
}

export default Rewies
