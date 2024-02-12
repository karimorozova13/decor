import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  background-color: ${({ bg }) => bg};
  position: relative;
  border-bottom: ${({ borBot }) => `2px solid ${borBot}`};
`;

const Section = ({
  pt = 50,
  pb = 150,
  bg,
  children,
  className,
  borBot = "transparent",
}) => {
  return (
    <Wrap pt={pt} pb={pb} bg={bg} className={className} borBot={borBot}>
      {children}
    </Wrap>
  );
};

export default Section;
