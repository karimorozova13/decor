import React from 'react'
import styled from "styled-components";

const SidesWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Sides = ( {children}) => {
  return (
    <SidesWrap>
      {children}
    </SidesWrap>
  )
}

export default Sides
