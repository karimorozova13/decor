import React from 'react'
import styled from "styled-components";

const RightSideContainer = styled.div`
  width: calc(100% / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 15px;
    order: ${({order})=>order};

  }
`;
const RightSide = ( {children, order=2}) => {
  return (
    <RightSideContainer order={order}>
      {children}
    </RightSideContainer>
  )
}

export default RightSide
