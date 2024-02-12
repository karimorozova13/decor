import { useEffect, useState } from "react";
import styled from "styled-components";

import { colors } from "../../config/colors";

const DotsWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  list-style-type: none;
  gap: 5px;
`;
const BtnDot = styled.button`
  display: block;
  width: 1rem;
  height: 1rem;
  border: none;
  border-radius: 100%;
  background-color: ${colors.border};
  cursor: pointer;
  &[data-active] {
    background-color: ${colors.tealColor};
  }
`;
const Dots = ({ currentIdx, changeIdx, dotsQuantity }) => {
  const [actualIdx, setActualIdx] = useState(0);

  const setCurrentIdx = (i) => {
    setActualIdx(i);
    changeIdx(i);
  };

  useEffect(() => {
    setActualIdx(currentIdx);
  }, [currentIdx]);

  return (
    <DotsWrap>
      {dotsQuantity.map((el, i) => {
        const active = actualIdx === el ? true : null;
        return (
          <BtnDot
            key={i}
            data-active={active}
            onClick={() => setCurrentIdx(el)}
          />
        );
      })}
    </DotsWrap>
  );
};
export default Dots;
