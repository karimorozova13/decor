import { colors } from "@/config/colors";
import React from "react";
import styled from "styled-components";

const Des = styled.h2`
  font-size: 18px;
  line-height: 1.33;
  color: ${colors.secodaryText};
  position: relative;
  padding-bottom: 20px;
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
`;

const Subtitle = ({ des }) => {
  return <Des>{des}</Des>;
};

export default Subtitle;
