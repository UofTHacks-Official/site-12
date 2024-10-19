import { useState, useRef, useEffect } from "react";
import {
  PastHackathonsModuleContainer,
  PastHackathonsModuleBackground,
  PastHackathonsModuleTitle,
  PastHackathonsModuleCardsContainer,
  IntroCardContainer,
  CarouselContainer,
} from "@/app/modules/past-hackathons/index.styles";
import FlipCard from "@/app/components/past-hackathons/flip-cards";
import CardFront from "@/app/components/past-hackathons/cards-front";
import CardBack from "@/app/components/past-hackathons/cards-back";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Carousel from "react-material-ui-carousel";
import { IconButton } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";

const spaceGroteskStyles = {
  color: "white",
  fontSize: "50px",
};
const spaceGroteskStylesCardNumber = {
  color: "#225c91",
  fontSize: "30px",
};
const items = [
  {
    colour: "#ffcbfa",
    year: "11",
    theme: "Nostalgia",
    subText: "yapyapyapyap",
  },
  {
    colour: "#ffcbfa",
    year: "11",
    theme: "Nostalgia",
    subText: "yapyapyapyap",
  },
  {
    colour: "#b5fff7",
    year: "X",
    theme: "Exploration",
    subText: "yapyapyapyap",
  },
  {
    colour: "#bae9fd",
    year: "9",
    theme: "Restoration",
    subText: "yapyapyapyap",
  },
  {
    colour: "#ffcdf8",
    year: "8",
    theme: "Connectivity",
    subText: "yapyapyapyap",
  },
];
interface ArrowButtonProps {
  onClick: () => void;
}
interface CloseButtonProps {
  onClick: () => void;
}
const PastHackathons = () => {
  const numSlides = useRef(items.length);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [flippedStates, setFlippedStates] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const shouldAnimate = useRef(false);
  const isMobile = useMobileDetect();

  const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
    return (
      <IconButton
        size="large"
        sx={{
          position: "absolute",
          top: "15%",
          right: "15%",
          fontSize: 50,
          zIndex: 50,
        }}
      >
        <CloseRoundedIcon
          fontSize="inherit"
          sx={{ color: "#ffffff" }}
          onClick={onClick}
        />
      </IconButton>
    );
  };

  const ArrowBackButton: React.FC<ArrowButtonProps> = ({ onClick }) => {
    return (
      <IconButton
        size="large"
        sx={{
          position: "absolute",
          top: "53%",
          left: "5%",
          fontSize: 50,
          transform: "translateY(-50%)",
          zIndex: 50,
        }}
      >
        <ArrowBackIosRoundedIcon
          fontSize="inherit"
          sx={{ color: "#ffffff" }}
          onClick={onClick}
        />
      </IconButton>
    );
  };
  const ArrowForwordButton: React.FC<ArrowButtonProps> = ({ onClick }) => {
    return (
      <IconButton
        size="large"
        sx={{
          position: "absolute",
          top: "53%",
          right: "5%",
          fontSize: 50,
          transform: "translateY(-50%)",
          zIndex: 50,
        }}
      >
        <ArrowForwardIosRoundedIcon
          fontSize="inherit"
          sx={{ color: "#ffffff" }}
          onClick={onClick}
        />
      </IconButton>
    );
  };

  const handleBackArrowClick = () => {
    shouldAnimate.current = true;
    const nextIndex =
      (activeIndex - 1 + numSlides.current) % numSlides.current ||
      numSlides.current - 1;
    setActiveIndex(nextIndex);
  };

  const handleForwardArrowClick = () => {
    shouldAnimate.current = true;
    const nextIndex = (activeIndex + 1) % numSlides.current || 1;
    setActiveIndex(nextIndex);
  };

  const handleCloseCard = () => {
    setFlippedStates((prevStates) => prevStates.map(() => false));
    setActiveIndex(0);
  };

  const handleCardClick: (targetSlide: number) => void = (
    targetSlide: number
  ) => {
    shouldAnimate.current = false;
    setFlippedStates((prevStates) =>
      prevStates.map((state, index) => index === targetSlide - 1)
    );
    setTimeout(() => {
      setActiveIndex(targetSlide);
    }, 600);
  };

  useEffect(() => {
    if (isMobile) {
      setActiveIndex(1);
    }
  }, [isMobile]);

  const IntroCards = () => {
    return (
      <IntroCardContainer>
        <FlipCard
          flippedStates={flippedStates}
          onClick={() => handleCardClick(1)}
          frontContent={
            <CardFront bgColour={items[0].colour} borderColour={"#bd90d8"}>
              <SpaceGrotesk style={spaceGroteskStylesCardNumber}>
                {items[0].year}
              </SpaceGrotesk>
            </CardFront>
          }
          backContent={<CardBack item={items[0]} />}
          mLeft="28%"
          mTop="10%"
          z="0"
          r="-6.19deg"
          id={0}
        />
        <FlipCard
          flippedStates={flippedStates}
          onClick={() => handleCardClick(2)}
          frontContent={
            <CardFront bgColour={items[2].colour} borderColour={"#8ccbe5"}>
              <SpaceGrotesk style={spaceGroteskStylesCardNumber}>
                {items[2].year}
              </SpaceGrotesk>
            </CardFront>
          }
          backContent={<CardBack item={items[2]} />}
          mLeft="12%"
          mTop="-12%"
          z="1"
          r="-17.55deg"
          id={1}
        />
        <FlipCard
          flippedStates={flippedStates}
          onClick={() => handleCardClick(3)}
          frontContent={
            <CardFront bgColour={items[3].colour} borderColour={"#8ccbe5"}>
              <SpaceGrotesk style={spaceGroteskStylesCardNumber}>
                {items[3].year}
              </SpaceGrotesk>
            </CardFront>
          }
          backContent={<CardBack item={items[3]} />}
          mLeft="-20%"
          mTop="13%"
          z="2"
          r="9.27deg"
          id={2}
        />
        <FlipCard
          flippedStates={flippedStates}
          onClick={() => handleCardClick(4)}
          frontContent={
            <CardFront bgColour={items[4].colour} borderColour={"#bd90d8"}>
              <SpaceGrotesk style={spaceGroteskStylesCardNumber}>
                {items[4].year}
              </SpaceGrotesk>
            </CardFront>
          }
          backContent={<CardBack item={items[4]} />}
          mLeft="-40%"
          mTop="-10%"
          z="3"
          r="-8.12deg"
          id={3}
        />
      </IntroCardContainer>
    );
  };

  return (
    <PastHackathonsModuleContainer id="PastHackathons-module">
      <PastHackathonsModuleTitle>
        <SpaceGrotesk style={spaceGroteskStyles}>Past Hackathons</SpaceGrotesk>
      </PastHackathonsModuleTitle>
      <PastHackathonsModuleCardsContainer>
        <CarouselContainer>
          {!isMobile && activeIndex !== 0 && (
            <CloseButton onClick={handleCloseCard} />
          )}
          {activeIndex !== 0 && (
            <ArrowBackButton onClick={handleBackArrowClick} />
          )}{" "}
          {/* todo animate this*/}
          {activeIndex !== 0 && (
            <ArrowForwordButton onClick={handleForwardArrowClick} />
          )}
          <Carousel
            navButtonsAlwaysInvisible={true}
            swipe={false}
            fullHeightHover={false}
            PrevIcon={<></>}
            NextIcon={<></>}
            autoPlay={false}
            animation={"fade"}
            duration={shouldAnimate.current ? 500 : 0}
            indicators={false}
            index={activeIndex}
            onChange={(now?: number) => {
              if (now !== undefined) {
                setActiveIndex(now);
              }
            }}
          >
            {items.map((item, i) =>
              i === 0 ? (
                <IntroCards key={i} />
              ) : (
                <CardBack key={i} item={item} />
              )
            )}
          </Carousel>
        </CarouselContainer>
      </PastHackathonsModuleCardsContainer>
      <PastHackathonsModuleBackground src="/background/book-overlay.svg" />
    </PastHackathonsModuleContainer>
  );
};

export default PastHackathons;
