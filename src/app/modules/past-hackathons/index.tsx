import { useState, useRef } from "react"
import {
    PastHackathonsModuleContainer,
    PastHackathonsModuleBackground,
    PastHackathonsModuleTitle,
    PastHackathonsModuleCardsContainer,
    IntroCardContainer,
    CarouselContainer,
} from "@/app/modules/past-hackathons/index.styles"
import FlipCard from "@/app/components/past-hackathons/flip-cards"
import CardFront from "@/app/components/past-hackathons/cards-front"
import CardBack from "@/app/components/past-hackathons/cards-back"
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk"
import Carousel from 'react-material-ui-carousel'
import { IconButton } from "@mui/material"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const spaceGroteskStyles = {
    color: "white",
    fontSize: "50px",
}
const spaceGroteskStylesCardNumber = {
    color: "#225c91",
    fontSize: "30px",
}
const items = [
    {
        colour: '#ffcbfa',
        year: '11',
        theme: 'Nostalgia',
        subText: 'yapyapyapyap'
    },
    {
        colour: '#ffcbfa',
        year: '11',
        theme: 'Nostalgia',
        subText: 'yapyapyapyap'
    },
    {
        colour: '#b5fff7',
        year: 'X',
        theme: 'Exploration',
        subText: 'yapyapyapyap'

    },
    {
        colour: '#bae9fd',
        year: '9',
        theme: 'Restoration',
        subText: 'yapyapyapyap'
    },
    {
        colour: '#ffcdf8',
        year: '8',
        theme: 'Connectivity',
        subText: 'yapyapyapyap'
    }
]
interface ArrowButtonProps {
    onClick: () => void;
}
const PastHackathons = () => {
    const numSlides = useRef(items.length)
    const [activeIndex, setActiveIndex] = useState<any>(0)
    const shouldAnimate = useRef(false)
    const handleCardClick = (targetSlide: number) => {
        shouldAnimate.current = false
        setActiveIndex(targetSlide)
    }

    const ArrowBackButton: React.FC<ArrowButtonProps> = ({ onClick }) => {
        return (
            <IconButton size='large' sx={{
                position: 'absolute',
                top: '53%',
                left: '5%',
                fontSize: 50,
                transform: 'translateY(-50%)',
                zIndex: 50,
            }}>
                <ArrowBackIosRoundedIcon fontSize='inherit' sx={{ color: '#ffffff' }} onClick={onClick} />
            </IconButton>
        )
    }
    const ArrowForwordButton: React.FC<ArrowButtonProps> = ({ onClick }) => {
        return (
            <IconButton size='large' sx={{
                position: 'absolute',
                top: '53%',
                right: '5%',
                fontSize: 50,
                transform: 'translateY(-50%)',
                zIndex: 50,
            }}>
                <ArrowForwardIosRoundedIcon fontSize='inherit' sx={{ color: '#ffffff' }} onClick={onClick} />
            </IconButton>
        )
    }

    const IntroCards = () => {
        return (
            <IntroCardContainer>
                <FlipCard
                    onClick={() => handleCardClick(1)}
                    frontContent={
                        <CardFront bgColour={items[0].colour}>
                            <SpaceGrotesk style={spaceGroteskStylesCardNumber}>{items[0].year}</SpaceGrotesk>
                        </CardFront>
                    }
                    backContent={
                        <CardBack item={items[0]} />
                    }
                >
                </FlipCard>
            </IntroCardContainer>
        )
    }

    return (
        <PastHackathonsModuleContainer id="PastHackathons-module">
            <PastHackathonsModuleTitle>
                <SpaceGrotesk style={spaceGroteskStyles}>Past Hackathons</SpaceGrotesk>
            </PastHackathonsModuleTitle>
            <PastHackathonsModuleCardsContainer>
                <CarouselContainer>
                    <ArrowBackButton onClick={() => setActiveIndex((activeIndex - 1 + numSlides.current)%numSlides.current)} />
                    <ArrowForwordButton onClick={() => setActiveIndex((activeIndex + 1)%numSlides.current)} />
                    <Carousel
                        swipe={false}
                        fullHeightHover={false}
                        PrevIcon={<></>}
                        NextIcon={<></>}
                        autoPlay={false}
                        animation={'slide'}
                        duration={shouldAnimate.current ? 500 : 0}
                        indicators={false}
                        index={activeIndex}
                        onChange={(now) => setActiveIndex(now)}
                    >
                        {
                            items.map((item, i) =>
                                i === 0 ? (
                                    <IntroCards key={i} />
                                ) : (
                                    <CardBack key={i} item={item} />)
                            )
                        }
                    </Carousel>
                    {/* <CarouselSlide item={items[0]}></CarouselSlide> */}
                </CarouselContainer>
            </PastHackathonsModuleCardsContainer>
            <PastHackathonsModuleBackground src="/background/past-hackathons.svg" />
        </PastHackathonsModuleContainer>
    );
};

export default PastHackathons;