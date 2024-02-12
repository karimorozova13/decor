import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import styled from "styled-components";

import { imagesConfig } from "@/config/images";
import useWindowSize from "../../utils/hooks/useWindowSize";

import Section from "./generic/Section";
import Container from "./generic/Container";
import Tabs from "./generic/Tabs";

const Logo = styled.div`
  position: absolute;
  top: 400px;
  left: 0;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 60px;
  p {
    font-style: italic;
    font-family: "Georgia Italic", cursive;
    color: rgba(0, 0, 0, 0.35);
    font-size: 24px;
    transform: rotate(-90deg);
    min-width: 267px;
    text-align: center;
    span {
      font-size: 35px;
      font-weight: 700;
      padding-right: 5px;
    }
  }
  @media only screen and (min-width: 1400px) {
    left: 70px;
    top: 450px;
    p {
      font-size: 35px;
      min-width: 367px;

      span {
        font-size: 45px;
      }
    }
  }
`;

const GalleryPage = () => {
  const { query } = useRouter();
  const [data, setData] = useState(imagesConfig.wedding);
  const { width } = useWindowSize();
  useEffect(() => {
    if (query.category) {
      setData(imagesConfig[query.category.toLowerCase()]);
    }
  }, [query.category]);

  const [index, setIndex] = useState(-1);

  const currentImage = data[index];
  const nextIndex = (index + 1) % data.length;
  const nextImage = data[nextIndex] || currentImage;
  const prevIndex = (index + data.length - 1) % data.length;
  const prevImage = data[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <Section pt={100}>
      {width > 1034 && (
        <Logo>
          <p>
            <span>{"Celebration"}</span>
            {" decor"}
          </p>
        </Logo>
      )}
      <Container>
        <Tabs />
        <div>
          <Gallery
            images={data}
            onClick={handleClick}
            enableImageSelection={false}
          />
          {!!currentImage && (
            <Lightbox
              mainSrc={currentImage.original}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>
      </Container>
    </Section>
  );
};

export default GalleryPage;
