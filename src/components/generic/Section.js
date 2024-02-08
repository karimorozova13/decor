import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  background-color: ${({ bg }) => bg};
`;

const Section = ({ pt = 50, pb = 150, bg, children, className }) => {
  return (
    <Wrap pt={pt} pb={pb} bg={bg} className={className}>
      {children}
    </Wrap>
  );
};

export default Section;
