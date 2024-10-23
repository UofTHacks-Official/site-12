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
  height: ${(props) => props.height};
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

export const CarouselCardText = styled.h1`
  width: 90%;
  color: #225c91;
  font-size: 50px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
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
export const CarouselCardImages = styled.div`
  width: 90%;
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CarouselCardImage = styled.img`
  width: 30%;
  border-radius: 25px;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
