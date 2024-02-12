import React from "react";
import styled from "styled-components";

import { colors } from "@/config/colors";

const Des = styled.h2`
  font-size: 18px;
  line-height: 1.33;
  color: ${colors.secodaryText};
  position: relative;
  padding-bottom: ${({ pb }) => `${pb}px`};
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 3px;
    background-color: ${colors.mainWhite};
    border-radius: 3px;
    display: block;
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;

const Subtitle = ({ des, pb = 20 }) => {
  return <Des pb={pb}>{des}</Des>;
};

export default Subtitle;
