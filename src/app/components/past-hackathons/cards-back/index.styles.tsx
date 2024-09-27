import styled from 'styled-components';

interface CarouselCardBordersProps {
    item: {
        colour: string;
        year: string;
        theme: string;
        subText: string;
    };
    children?: React.ReactNode;
}

export const CarouselSlides = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CarouselCardBorders: React.FC<CarouselCardBordersProps> = styled.div<CarouselCardBordersProps>`
border-radius: 45px;
background: ${(props) => props.item.colour};
height: 70%;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;

box-shadow: 0 0 20px ${(props) => props.item.colour};
transition: box-shadow 0.3s ease-in-out;

  &:hover {
      /* Intensify the glow on hover */
      box-shadow: 0 0 40px ${(props) => props.item.colour};
  }
`

export const CarouselCards = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CarouselCardText = styled.h1`
    width: 90%;
    color: #225c91;
    font-size: 50px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`

export const CarouselCardTextNumber = styled.h1``

export const CarouselCardTextOther = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    padding-top: 15px;
`

export const CarouselCardTextTheme = styled.h1``
export const CarouselCardTextSubText = styled.h1``
export const CarouselCardImages = styled.div`
    width: 90%;
    height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CarouselCardImage = styled.img`
    width: 30%;
    height: 80%;
    border-radius: 25px;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
`