import React from 'react'
import styled from 'styled-components';
import { colors } from '@/config/colors';

const TabsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 40px;
`;
const Tab = styled(Link)`
  text-decoration: none;
  color: ${colors.mainWhite};
  padding: 7px;
  position: relative;
  opacity: 0.4;
  border-bottom: 2px solid transparent;

  &[data-active] {
    opacity: 1;
    border-color: ${colors.tealColor};
  }
`;
const Tabs = () => {
  return (
    <div>
      
    </div>
  )
}

export default Tabs
