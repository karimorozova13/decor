import { colors } from "@/config/colors";
import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  font-size: 45px;
  line-height: 1.33;
  color: ${colors.secodaryText};
`;

const Title = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default Title;
