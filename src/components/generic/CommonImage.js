import Image from "next/image";
import styled from "styled-components";

const ImageS = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    z-index: 1;
    object-fit: contain;
    height: 100%;
    width: 100%;
    max-width: ${({ width }) => `${width}px`};
    max-height: ${({ height }) => `${height}px`};
  }
`;

const CommonImage = ({ source, height, width, styles, className }) => {
  return (
    <ImageS width={width} height={height} className={className}>
      <Image
        style={styles}
        priority
        src={source}
        width={width}
        height={height}
        alt="Hero Image"
      />
    </ImageS>
  );
};

export default CommonImage;
