import styled, { keyframes, css } from "styled-components";

interface CarouselCardBordersProps {
  item: {
    colour: string;
    year: string;
    theme: string;
    subText: string;
    padding: string;
    borderRadius: string;
  };
  height: string;
  width: string;
  children?: React.ReactNode;
}

interface CarouselSlidesProps {
  height: string;
}

interface CarouselTextProps {
  isMobile: boolean;
}

export const CarouselSlides = styled.div<CarouselSlidesProps>`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

export const CarouselCardBorders: React.FC<CarouselCardBordersProps> = styled.div<CarouselCardBordersProps>`
  border-radius: ${(props) => props.item.borderRadius};
  background: ${(props) => props.item.colour};
  height: max(${(props) => props.height}, 450px);
  width: min(${(props) => props.width}, 900px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.item.padding};

  box-shadow: 0 0 20px ${(props) => props.item.colour};
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    /* Intensify the glow on hover */
    box-shadow: 0 0 40px ${(props) => props.item.colour};
  }

  animation: ${rotateAnimation} 1s forwards;
`;

interface CarouselCardsProps {
  borderRadius: string;
}

export const CarouselCards = styled.div<CarouselCardsProps>`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.borderRadius};
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselCardText = styled.h1<CarouselTextProps>`
  width: ${(props) => (props.isMobile ? "75%" : "90%")};
  color: #225c91;
  font-size: 50px;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  margin-top: 20px;
  align-items: center;
`;

export const CarouselCardTextNumber = styled.h1``;

interface CarouselCardTextOtherProps {
  marginLeft: string;
}

export const CarouselCardTextOther = styled.div<CarouselCardTextOtherProps>`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => props.marginLeft};
  padding-top: 15px;
`;

export const CarouselCardTextTheme = styled.h1``;
export const CarouselCardTextSubText = styled.h1``;
export const CarouselCardImages = styled.div<CarouselTextProps>`
  width: 90%;
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: ${(props) => (props.isMobile ? "center" : "space-between")};
  gap: 10px;
  align-items: center;
`;
export const CarouselCardImage = styled.img<CarouselTextProps>`
  width: ${(props) => (props.isMobile ? "min(48%, 220px)" : "32%")};
  height: 60%;
  border-radius: 25px;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  object-position: center center;
`;
