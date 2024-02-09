import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  background-color: ${({ bg }) => bg};
  position: relative;
  border-right:${({borderRight})=>`2px solid ${borderRight}`};
  border-left:${({borderLeft})=>`2px solid ${borderLeft}`};
  border-top:${({borderTop})=>`2px solid ${borderTop}`};
  border-bottom:${({borderBottom})=>`2px solid ${borderBottom}`};

`;

const Section = ({ pt = 50, pb = 150, bg, children, className,borderRight='transparent',borderLeft='transparent',borderBottom='transparent',borderTop='transparent' }) => {
  return (
    <Wrap pt={pt} pb={pb} bg={bg} className={className} borderRight={borderRight} borderLeft={borderLeft} borderBottom={borderBottom} borderTop={borderTop}>
      {children}
    </Wrap>
  );
};

export default Section;
