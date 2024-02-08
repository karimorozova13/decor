import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: ${({ pr }) => `${pr}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  width: 100%;
  background-color: ${({ bg }) => bg};

  @media screen and (max-width: 767px) {
    flex-wrap: initial !important;
  }

  /* @media (min-width: 576px) {
    max-width: 540px;
  } */
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Container = ({ pr = 15, pl = 15, bg, children }) => {
  return (
    <Wrap pr={pr} pl={pl} bg={bg}>
      {children}
    </Wrap>
  );
};

export default Container;
