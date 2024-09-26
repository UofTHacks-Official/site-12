import styled from "styled-components";
import { ModuleBackground, ModuleContainer } from "@/app/components/shared/containers/index.styles";
import React from "react";

const PastHackathonsModuleContainer = styled(ModuleContainer)`
    height: 100vh;
    min-height: 600px;
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 5vh;
    padding-bottom: 5vh;
`;

const PastHackathonsModuleBackground = styled(ModuleBackground)``

const PastHackathonsModuleTitle = styled.h1`
    color: white;
    font-size: 50px;
    padding-left: 10vw;
    padding-right: 10vw;
    // border: 1px solid white;
`

const PastHackathonsModuleCardsContainer = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CarouselContainer = styled.div`
    width: 100%;
    height: 80vh;
    border: 1px solid blue;
`

interface CarouselCard {
    item: {
        colour: string;
        year: string;
        theme: string;
        subText: string;
    };
    children?: React.ReactNode;
}

const CarouselSlides = styled.div`
    width: 100%;
    height: 80vh;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;

`

const CarouselCardBorders: React.FC<CarouselCard> = styled.div<CarouselCard>`
  border-radius: 45px;
  background: ${(props) => props.item.colour};
  height: 70%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const CarouselCards = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: #ffffff;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CarouselCardText = styled.h1`
    width: 90%;
    color: #225c91;
    font-size: 50px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`
const CarouselCardTextNumber = styled.h1`
    `

const CarouselCardTextOther = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    padding-top: 15px;
`

const CarouselCardTextTheme = styled.h1`
    
`
const CarouselCardTextSubText = styled.h1`
`
const CarouselCardImages = styled.div`
    width: 90%;
    height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CarouselCardImage = styled.img`
    width: 30%;
    height: 80%;
    border-radius: 25px;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
`


export {
    PastHackathonsModuleContainer,
    PastHackathonsModuleBackground,
    PastHackathonsModuleTitle,
    PastHackathonsModuleCardsContainer,
    CarouselContainer,
    CarouselSlides,
    CarouselCardBorders,
    CarouselCards,
    CarouselCardText,
    CarouselCardTextNumber,
    CarouselCardTextOther,
    CarouselCardTextTheme,
    CarouselCardTextSubText,
    CarouselCardImages,
    CarouselCardImage,
};
