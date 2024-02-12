import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

import { colors } from "@/config/colors";

const TabsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 40px;
`;
const Tab = styled(Link)`
  text-decoration: none;
  color: ${colors.secodaryText};
  padding: 7px;
  position: relative;
  opacity: 0.4;
  border-bottom: 2px solid transparent;
  font-size: 18px;

  &[data-active] {
    opacity: 1;
    border-color: ${colors.tealColor};
  }
  :hover {
    color: ${colors.tealColor};
  }
`;
const Tabs = () => {
  const router = useRouter();
  const tabs = ["Wedding", "Events", "Floral", "Seasonal", "Outdoor"];
  const [active, setActive] = useState();

  useEffect(() => {
    setActive(router.query.category);
  }, [router.query.category]);

  return (
    <TabsWrap>
      {tabs.map((el, i) => (
        <Tab
          href={`/gallery?category=${el}`}
          data-active={active === el ? true : null}
          key={i}
        >
          {el}
        </Tab>
      ))}
    </TabsWrap>
  );
};

export default Tabs;
