import React from 'react'
import styled from "styled-components";

const LeftSideContainer = styled.div`
  width: calc(100% / 2);
  padding-left: ${({pl})=>`${pl}px`};
  padding-right: ${({pr})=>`${pr}px`};

  @media only screen and (max-width: 767px) {
    width: 100%;
    order: ${({order})=>order};
  }
`;

const LeftSide = ({children, order=1, pl=0, pr=0}) => {
  return (
    <LeftSideContainer order={order} pl={pl} pr={pr}>
      {children}
    </LeftSideContainer>
  )
}

export default LeftSide
