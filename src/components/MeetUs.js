import styled from "styled-components";

import { colors } from "@/config/colors";
import useWindowSize from "../../utils/hooks/useWindowSize";

import Container from "./generic/Container";
import Section from "./generic/Section";
import Sides from "./generic/Sides";
import LeftSide from "./generic/LeftSide";
import RightSide from "./generic/RightSide";
import Title from "./generic/Title";
import Subtitle from "./generic/Subtitle";
import CommonImage from "./generic/CommonImage";

const Content = styled.div`
  width: 100%;
  height: 100%;
  border-left: 2px solid ${colors.border};
  padding-bottom: 80px;
  padding-top: 40px;
`;
const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 5px;
  overflow: hidden;
  margin-top: -130px;
`;

const MeetUs = () => {
  const { width } = useWindowSize();

  return (
    <div id="about">
      <Section pt={0} pb={0} bg={colors.mainWhite} borBot={colors.border}>
        <Container>
          <Content>
            <Sides>
              <LeftSide order={2} pl={width > 767 ? 40 : 10}>
                <Title title={"Meet us"} mb={30} />
                <Subtitle
                  pb={10}
                  des={"In 2014 we started events decoration in Ukraine."}
                />
                <Subtitle
                  pb={10}
                  des={"Since 2022 we are operating in France."}
                />
                <Subtitle
                  pb={10}
                  des={
                    "We love festive atmosphere, flowers, natural materials and romantic details"
                  }
                />
              </LeftSide>
              <RightSide order={1}>
                <ImgWrap>
                  <CommonImage
                    source={"/images/meet.jpg"}
                    width={1125}
                    height={1125}
                  />
                </ImgWrap>
              </RightSide>
            </Sides>
          </Content>
        </Container>
      </Section>
    </div>
  );
};

export default MeetUs;
