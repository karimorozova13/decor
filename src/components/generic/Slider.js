import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { IoPersonSharp } from "react-icons/io5";

import { colors } from "../../config/colors";

import useWindowSize from "../../../utils/hooks/useWindowSize";
import Container from "./Container";
import Title from "./Title";
import Dots from "./Dots";

const Content = styled.div`
width: 100%;
height: 100%;
border-left: 2px solid ${colors.border};
padding-bottom: 80px;
padding-top: 40px;
`
const SliderWrapper = styled.div`
  display: flex;

  overflow: hidden;
  padding-bottom: 30px;
`;

const List = styled.div`
  display: grid;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  justify-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 991px) {
    max-width: 440px;
    margin: 0 auto;
    width: 100%;
  }
`;

const Slide = styled.div`
width: 290px;
box-shadow: ${colors.boxShadow};
background-color: ${colors.mainWhite};
color: ${colors.secodaryText};
border-radius: 15px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
  transform-style: preserve-3d;
  transform: ${({ offset, dir, viewZ, valueY }) =>
    `perspective(1000px) 
    translateX(calc(100% * ${offset}))
    
      rotateY(calc(-${valueY}deg * ${dir})) translateZ(${viewZ}px) ${
      offset !== 0 ? "scale(0.75)" : "scale(1)"
    } ${offset === 2 ? "scale(0.90) translateX(-100%)" : ""} ${
      offset === -2 ? "scale(0.90) translateX(100%)" : ""
    }`};

  transition: transform 0.5s ease-in-out;
  grid-area: 1 / -1;
  margin-right: ${({ dir }) => (dir > 0 ? "200px" : "0")};
  margin-left: ${({ dir }) => (dir < 0 ? "200px" : "0")};

  filter: ${({ offset }) =>
    `${
      offset === 0
        ? "contrast(100%)"
        : offset === 1
        ? "contrast(50%) brightness(1.5)"
        : offset === 2
        ? "contrast(30%) brightness(1.5)"
        : offset === -1
        ? "contrast(50%) brightness(1.5)"
        : offset === -2
        ? "contrast(30%) brightness(1.5)"
        : ""
    }
    `};

  z-index: ${({ offset }) =>
    `${
      offset === 0
        ? 3
        : offset === 1
        ? 2
        : offset === 2
        ? 1
        : offset === -1
        ? 2
        : offset === -2
        ? 1
        : ""
    }
    `};

  &[data-opacity] {
    opacity: 1;
  }


  @media (max-width: 767px) {
    transform: ${({ offset, dir, viewZ, valueY }) =>
      `perspective(1000px) 
    translateX(calc(100% * ${offset}))
    
      rotateY(calc(-${valueY}deg * ${dir})) translateZ(${viewZ}px) ${
        offset !== 0 ? "scale(0.75)" : "scale(1)"
      } ${offset === 1 ? "scale(1.2) translateX(-230px)" : ""} ${
        offset === -1 ? "scale(1.2) translateX(230px)" : ""
      }`};

    margin: 0 auto;
  }
  @media (max-width: 424px) {
    width:225px;

  }
`;

const Heading = styled.h2`
  font-size: 45px;
  color: ${colors.secodaryText};
  text-align:center;
margin-bottom: 40px;
  @media only screen  and (max-width: 767px) {
    text-align: center;
  }
`;
const UserName = styled.h3`
font-size: 18px;
color: ${colors.secodaryText};
`
const Avatar = styled.div`

display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: ${colors.bgAlpha};
width: 60px;
height: 60px;
border: 1px solid ${colors.border};
`

const Slider = () => {
  const [currentIdx, setCurrentIdx] = useState(2);
  const incrementIdx = () => {
    setCurrentIdx((currentIdx + 1) % data.length);
  };
  const decrementIdx = () => {
    currentIdx === 0
      ? setCurrentIdx(data.length - 1)
      : setCurrentIdx(currentIdx - 1);
  };
  const calculateRotateY = (offset) => {
    switch (offset) {
      case 2:
      case -2:
        return 38;
      case 3:
      case -3:
        return 41;
      default:
        return 30;
    }
  };

  const data = [
    {
      name :'Iryna, Ukraine',
      des:"It was such a romantic atmosphere at our wedding! Everything was at the highest level, thank you so much for everything you did!"
    },
    {
      name :'Evgenia, Kherson,Ukraine',
      des:"Everything is incredibly gentle, simple and beautiful, just as I wanted! I am very glad I chose you, it was as it you felt me"
    },
    {
      name :'Alona , Strasbourg, France',
      des:"C'était une superbe expérience. J'ai pu faire mon propre bouquet comme je le souhaitais et avec les conseils d'une vraie pro dans le domaine. L'ambiance était au top et tout le monde avait l'air content d'être là. Merci encore et j'attends le prochain workshop!"
    },
    {
      name :'Olga, Kherson, Ukraine',
      des:"You are a professional in your field,I know that it will be good, but I didn't even think that it would be like that! We are very pleased with the decoration of our wedding! It was so gentle and stylish, just the way I like it . Thank you very much!"
    },
    {
      name :'Olga, Savern , France',
      des:"e ne voulais pas avoir une décoration de table de mariage banale ou classique… Je voulais avoir une prairie fleurie avec des fleurs du jardin simple et chique! Merci beaucoup pour votre professionnalisme, vous avez réalisé mes rêves! Les bougies, les vases, les fleurs, les serviettes… tout était parfait! Le bouquet de la mariée est tout simplement un coup de foudre! Merci pour votre travail, professionnalisme! Écoute!"
    }
  ]
  return (
    <div style={{ backgroundColor: `${colors.mainWhite}` }}>
    
      <Container>
        <Content>
          <Heading>{'Client Testimonials'}</Heading> 
          <SliderWrapper>
            <List>
              {[...data, ...data, ...data].map(({name,des}, index) => {
                let offset = data.length + (currentIdx - index);
                const active = offset === 0 ? true : null;
                let viewZ = index !== currentIdx ? -50 : 0;
                let dir = offset === 0 ? 0 : offset > 0 ? 1 : -1;
                return (
                  <Slide
                    data-opacity={active}
                    key={index}
                    offset={offset}
                    dir={dir}
                    valueY={calculateRotateY(offset)}
                    viewZ={viewZ}
                  >
<Avatar>

                    <IoPersonSharp size={26} color={colors.secodaryText}/>
</Avatar>
                    <UserName>{name}</UserName>
                    <p>{des}</p>
                  </Slide>
                );
              })}
            </List>

           
          </SliderWrapper>
          <Dots
            dotsQuantity={[4,3,2,1,0]}
            currentIdx={currentIdx}
            changeIdx={(i) => setCurrentIdx(i)}
          />
        </Content>
      </Container>
    </div>
  );
};

export default Slider;
