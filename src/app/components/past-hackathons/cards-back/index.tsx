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
} from "./index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";

interface CarouselCardBordersProps {
  item: {
    colour: string;
    year: string;
    theme: string;
    subText: string;
    padding: string;
    borderRadius: string;
    img1: string;
    img2: string;
    img3: string;
  };
  children?: React.ReactNode;
}

const CardBack: React.FC<CarouselCardBordersProps> = (props) => {
  const isMobile = useMobileDetect();

  const spaceGroteskStylesNumber = {
    color: "#225c91",
    fontSize: isMobile ? "75px" : "100px",
  };
  const spaceGroteskStylesTheme = {
    color: "#225c91",
    fontSize: isMobile ? "35px" : "40px",
    letterSpacing: "0.05px",
  };
  const spaceGroteskStylesSubText = {
    color: "#225c91",
    fontSize: isMobile ? "18px" : "22px",
    letterSpacing: "0.05px",
  };
  return (
    <CarouselSlides height={isMobile ? "80vh" : "80vh"}>
      <CarouselCardBorders
        item={props.item}
        height={isMobile ? "60%" : "70%"}
        width={isMobile ? "90%" : "max(60%, 700px)"}
      >
        <CarouselCards borderRadius={isMobile ? "15px" : "25px"}>
          <CarouselCardText>
            <CarouselCardTextNumber>
              <SpaceGrotesk style={spaceGroteskStylesNumber}>
                {props.item.year}
              </SpaceGrotesk>
            </CarouselCardTextNumber>
            <CarouselCardTextOther marginLeft={isMobile ? "50px" : "60px"}>
              <CarouselCardTextTheme>
                <SpaceGrotesk style={spaceGroteskStylesTheme}>
                  {props.item.theme}
                </SpaceGrotesk>
              </CarouselCardTextTheme>
              <CarouselCardTextSubText>
                <SpaceGrotesk style={spaceGroteskStylesSubText}>
                  {props.item.subText}
                </SpaceGrotesk>
              </CarouselCardTextSubText>
            </CarouselCardTextOther>
          </CarouselCardText>
          <CarouselCardImages>
            <CarouselCardImage
              src={"/assets/past-hackathons/" + props.item.img1}
            />
            <CarouselCardImage
              src={"/assets/past-hackathons/" + props.item.img2}
            />
            <CarouselCardImage
              src={"/assets/past-hackathons/" + props.item.img3}
            />
          </CarouselCardImages>
        </CarouselCards>
      </CarouselCardBorders>
    </CarouselSlides>
  );
};

export default CardBack;
