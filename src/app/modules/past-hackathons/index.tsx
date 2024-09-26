import { useRef } from "react"
import {
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
} from "@/app/modules/past-hackathons/index.styles"
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk"
import Carousel from 'react-material-ui-carousel'

const PastHackathons = () => {
    const sliderRef = useRef(null)
    const spaceGroteskStyles = {
        color: "white",
        fontSize: "50px",
    }
    const spaceGroteskStylesNumber = {
        color: "#225c91",
        fontSize: "100px",
    }
    const spaceGroteskStylesTheme = {
        color: "#225c91",
        fontSize: "45px",
    }
    const spaceGroteskStylesSubText = {
        color: "#225c91",
        fontSize: "24px",
    }
    const items = [
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

    const CarouselSlide: React.FC<CarouselSlideProps> = (props) => {
        return (
            <CarouselSlides>
                <CarouselCardBorders item={props.item}>
                    <CarouselCards>
                        <CarouselCardText>
                            <CarouselCardTextNumber>
                                <SpaceGrotesk style={spaceGroteskStylesNumber}>{props.item.year}</SpaceGrotesk>
                            </CarouselCardTextNumber>
                            <CarouselCardTextOther>
                                <CarouselCardTextTheme>
                                    <SpaceGrotesk style={spaceGroteskStylesTheme}>{props.item.theme}</SpaceGrotesk>
                                </CarouselCardTextTheme>
                                <CarouselCardTextSubText>
                                    <SpaceGrotesk style={spaceGroteskStylesSubText}>{props.item.subText}</SpaceGrotesk>
                                </CarouselCardTextSubText>
                            </CarouselCardTextOther>
                        </CarouselCardText>
                        <CarouselCardImages>
                            <CarouselCardImage/>
                            <CarouselCardImage/>
                            <CarouselCardImage/>
                        </CarouselCardImages>
                    </CarouselCards>
                </CarouselCardBorders>
            </CarouselSlides>
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
                    >
                        {
                            items.map((item, i) => <CarouselSlide key={i} item={item} />)
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