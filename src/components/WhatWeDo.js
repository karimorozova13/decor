import { colors } from "@/config/colors";
import Container from "./generic/Container";
import Section from "./generic/Section";
import Sides from "./generic/Sides";
import LeftSide from "./generic/LeftSide";
import RightSide from "./generic/RightSide";
import Title from "./generic/Title";
import Subtitle from "./generic/Subtitle";
import CommonImage from "./generic/CommonImage";
import styled from "styled-components";
import useWindowSize from "../../utils/hooks/useWindowSize";

const Content = styled.div`
width: 100%;
height: 100%;
border-right: 2px solid ${colors.border};
padding-bottom: 80px;
padding-top: 40px;
`
const ImgWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
border-radius: 5px;
overflow: hidden;
@media only screen and (min-width: 768px) {
border: 4px solid ${colors.border};
}
`

const Text = styled.div`
@media only screen and (min-width: 768px) {

    padding-right: 40px;}

`
const Logo = styled.div`
position: absolute;
top: 0;
right: 30px;
height: 100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
width: 60px;
 p {
  font-style: italic;
  color: ${colors.border};
  font-size: 24px;
  transform: rotate(-90deg);
  min-width: 250px;
  text-align: center;
  span {
    font-size: 35px;
    font-weight: 700;
    padding-right: 5px;
  }
 }
 
`

const WhatWeDo = ()=> {
    const {width} = useWindowSize()
return <div id="what">
<Section pt={0} pb={0} bg={colors.mainWhite} id="what" borderBottom={colors.border}>
      {width > 849 &&  <Logo><p><span>{'Celebration'}</span>{' decor'}</p></Logo>}

                <Container>
            <Content>

                    <Sides>
                        <LeftSide pr={10}>
                            <ImgWrap>
                        <CommonImage source={"/images/what.jpg"} width={1125} height={1125} />
                            </ImgWrap>

                           
                        </LeftSide>
                        <RightSide >
                        <Title title={"What we do"} />
                        <Text>
                            <Subtitle pb={10}
                                des={
                                    "We are specialized in floristry and decoration of any events:"
                                }
                                />
                                <Subtitle pb={10}
                                des={
                                "Weddings,children's birthday, bridal shower, gender party, private evenings, etc."
                                }
                            />
                            <Subtitle pb={10}
                                des={
                                    "We also organize floral workshops"
                                }
                            />
                        </Text>
                        </RightSide>
                    </Sides>
                    </Content>
                </Container>
</Section></div>
}

export default WhatWeDo;
