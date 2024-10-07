import {
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
} from './index.styles'
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk"


interface CarouselCardBordersProps {
    item: {
        colour: string;
        year: string;
        theme: string;
        subText: string;
    };
    children?: React.ReactNode;
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

const CardBack: React.FC<CarouselCardBordersProps> = (props) => {
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
                        <CarouselCardImage />
                        <CarouselCardImage />
                        <CarouselCardImage />
                    </CarouselCardImages>
                </CarouselCards>
            </CarouselCardBorders>
        </CarouselSlides>
    )
}

export default CardBack