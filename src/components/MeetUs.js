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
border-left: 2px solid ${colors.border};
padding-bottom: 80px;
padding-top: 40px;
`
const ImgWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
border: 2px solid #fff;
border-radius: 5px;
overflow: hidden;
margin-top: -130px;

`

const MeetUs = ()=> {
    const {width} = useWindowSize()
return <Section pt={0} pb={0} bg={colors.mainWhite} borderBottom={colors.border}>
                <Container>
            <Content>

                    <Sides>
                        <LeftSide order={2} pl={width > 767 ? 40 : 10}>
                            <Title title={"Meet us"} mb={30}/>
                            <Subtitle pb={10}
                                des={
                                    "We started decorating events in Ukraine, since 2014"
                                }
                                />
                                <Subtitle pb={10}
                                des={
                                "Now, our business of heart is in Europe, France"
                                }
                            />
                            <Subtitle pb={10}
                                des={
                                    "We adore the festive atmosphere, flowers, natural materials, romantic details"
                                }
                            />
                        </LeftSide>
                        <RightSide order={1}>
                            <ImgWrap>
                            <CommonImage source={"/images/meet.jpg"} width={1125} height={1125} />
                            </ImgWrap>

                        </RightSide>
                    </Sides>
                    </Content>
                </Container>
</Section>
}

export default MeetUs;
