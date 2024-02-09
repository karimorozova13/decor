import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  background-color: ${({ bg }) => bg};
  position: relative;
  border-bottom:${({borderBottom})=>`2px solid ${borderBottom}`};

`;

const Section = ({ pt = 50, pb = 150, bg, children, className,borderBottom='transparent',}) => {
  return (
    <Wrap pt={pt} pb={pb} bg={bg} className={className}  borderBottom={borderBottom} >
      {children}
    </Wrap>
  );
};

export default Section;
