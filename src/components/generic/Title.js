import { colors } from "@/config/colors";
import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  font-size: 45px;
  color: ${colors.secodaryText};
  margin-bottom: ${({mb})=>`${mb}px`};

  @media only screen  and (max-width: 767px) {
    text-align: center;
  }
`;

const Title = ({ title, mb=0 }) => {
  return <Heading mb={mb}>{title}</Heading>;
};

export default Title;
