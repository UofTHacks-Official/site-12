import { useRef, useState } from "react"
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

const PastHackathons = () => {
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

    interface CarouselSlideProps {
        item: {
            colour: string;
            year: string;
            theme: string;
            subText: string;
        };
    }

    const [activeIndex, setActiveIndex] = useState<any>(0)
    const [flippedCard, setFlippedCard] = useState<number | boolean>(false)
    const handleCardClick = (cardIndex: number, targetSlide: number) => {
        // setFlippedCard(cardIndex)

        // setTimeout(() => {
        //     setActiveIndex(targetSlide)
        //     setFlippedCard(false)
        // }, 600)
    }

    const IntroCards = () => {
        return (
            <IntroCardContainer>
                <FlipCard
                    onClick={() => handleCardClick(1, 1)}
                    frontContent={
                        <CardFront bgColour={items[0].colour}>
                            <SpaceGrotesk style={spaceGroteskStylesCardNumber}>{items[0].year}</SpaceGrotesk>
                        </CardFront>
                    }
                    backContent={<CarouselSlide item={items[0]} />}
                >
                </FlipCard>
            </IntroCardContainer>
        )
    }

    const CarouselSlide: React.FC<CarouselSlideProps> = (props) => {
        return (
            <CardBack item={props.item} />
        )
    }

    return (
        <PastHackathonsModuleContainer id="PastHackathons-module">
            <PastHackathonsModuleTitle>
                <SpaceGrotesk style={spaceGroteskStyles}>Past Hackathons</SpaceGrotesk>
            </PastHackathonsModuleTitle>
            <PastHackathonsModuleCardsContainer>
                <CarouselContainer>
                    <Carousel
                        navButtonsAlwaysVisible
                        autoPlay={false}
                        animation="slide"
                        indicators={false}
                        index={activeIndex}
                        onChange={(now) => setActiveIndex(now)}
                    >
                        {
                            items.map((item, i) =>
                                i === 0 ? (
                                    <IntroCards key={i} />
                                ) : (
                                    <CarouselSlide key={i} item={item} />)
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