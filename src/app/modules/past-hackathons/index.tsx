import { useState, useRef, useEffect } from "react";
import {
  PastHackathonsModuleContainer,
  PastHackathonsModuleTitle,
  PastHackathonsModuleCardsContainer,
  IntroCardContainer,
  CarouselContainer,
  TopBook,
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

interface ArrowButtonProps {
  onClick: () => void;
  isMobile: boolean | null;
}
interface CloseButtonProps {
  onClick: () => void;
}
const PastHackathons = () => {
  const isMobile = useMobileDetect();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [flippedStates, setFlippedStates] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const items = [
    {
      colour: "#ffffff",
      year: "ALL",
      theme: "ALL",
      subText: "ALL",
      padding: isMobile ? "10px" : "20px",
      borderRadius: isMobile ? "25px" : "45px",
      img1: "11-1.jpg",
      img2: "11-2.jpg",
      img3: "11-3.jpg",
    },
    {
      colour: "#ffcdf8",
      year: "8",
      theme: "Connectivity",
      subText: "yapyapyapyap",
      padding: isMobile ? "10px" : "20px",
      borderRadius: isMobile ? "25px" : "45px",
      img1: "11-1.jpg",
      img2: "11-2.jpg",
      img3: "11-3.jpg",
    },
    {
      colour: "#bae9fd",
      year: "9",
      theme: "Restoration",
      subText: "yapyapyapyap",
      padding: isMobile ? "10px" : "20px",
      borderRadius: isMobile ? "25px" : "45px",
      img1: "11-1.jpg",
      img2: "11-2.jpg",
      img3: "11-3.jpg",
    },
    {
      colour: "#b5fff7",
      year: "X",
      theme: "Exploration",
      subText:
        "UofTHacks launched us into outer space on a journey of exploration, where hackers pushed boundaries and brought bold, innovative ideas to life in an unforgettable experience!",
      padding: isMobile ? "10px" : "20px",
      borderRadius: isMobile ? "25px" : "45px",
      img1: "10-1.JPG",
      img2: "10-2.JPG",
      img3: "10-3.JPG",
    },
    {
      colour: "#ffcbfa",
      year: "11",
      theme: "Nostalgia",
      subText:
        "UofTHacks took us on a nostalgic trip down memory lane, where for 36 hours, hackers channeled the past to inspire their creations of the future.",
      padding: isMobile ? "10px" : "20px",
      borderRadius: isMobile ? "25px" : "45px",
      img1: "11-1.jpg",
      img2: "11-2.jpg",
      img3: "11-3.jpg",
    },
  ];
  const numSlides = useRef(items.length);

  const shouldAnimate = useRef(false);
  const spaceGroteskStyles = {
    color: "white",
    fontSize: isMobile ? "40px" : "50px",
    letterSpacing: "1px",
  };
  const spaceGroteskStylesCardNumber = {
    color: "#225c91",
    fontSize: isMobile ? "20px" : "30px",
  };

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

  const ArrowBackButton: React.FC<ArrowButtonProps> = ({
    onClick,
    isMobile,
  }) => {
    return (
      <IconButton
        size="large"
        sx={{
          position: "absolute",
          top: "53%",
          left: "5%",
          fontSize: isMobile ? 30 : 50,
          transform: "translateY(-50%)",
          zIndex: 50,
        }}
      >
        <ArrowBackIosRoundedIcon
          fontSize="inherit"
          sx={{ color: isMobile ? "#000000" : "#ffffff" }}
          onClick={onClick}
        />
      </IconButton>
    );
  };
  const ArrowForwordButton: React.FC<ArrowButtonProps> = ({
    onClick,
    isMobile,
  }) => {
    return (
      <IconButton
        size="large"
        sx={{
          position: "absolute",
          top: "53%",
          right: "5%",
          fontSize: isMobile ? 30 : 50,
          transform: "translateY(-50%)",
          zIndex: 50,
        }}
      >
        <ArrowForwardIosRoundedIcon
          fontSize="inherit"
          sx={{ color: isMobile ? "#000000" : "#ffffff" }}
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
    }, 400);
  };

  useEffect(() => {
    if (isMobile) {
      setActiveIndex(1);
    }
  }, [isMobile]);

  const IntroCards = () => {
    return (
      <IntroCardContainer>
        {/* bottom right */}
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
          mLeft="28%"
          mTop="10%"
          z="0"
          r="-6.19deg"
          id={3}
        />
        {/* top right */}
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
        {/* bottom left */}
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
        {/* top left */}
        <FlipCard
          flippedStates={flippedStates}
          onClick={() => handleCardClick(1)}
          frontContent={
            <CardFront bgColour={items[1].colour} borderColour={"#bd90d8"}>
              <SpaceGrotesk style={spaceGroteskStylesCardNumber}>
                {items[1].year}
              </SpaceGrotesk>
            </CardFront>
          }
          backContent={<CardBack item={items[1]} />}
          mLeft="-40%"
          mTop="-10%"
          z="3"
          r="-8.12deg"
          id={0}
        />
      </IntroCardContainer>
    );
  };

  return (
    <PastHackathonsModuleContainer id="PastHackathons-module">
      {!isMobile && (
        <TopBook src="/assets/past-hackathons/book-top-right.svg" />
      )}
      <PastHackathonsModuleTitle>
        <SpaceGrotesk style={spaceGroteskStyles}>Past Hackathons</SpaceGrotesk>
      </PastHackathonsModuleTitle>
      <PastHackathonsModuleCardsContainer>
        <CarouselContainer>
          {!isMobile && activeIndex !== 0 && (
            <CloseButton onClick={handleCloseCard} />
          )}
          {activeIndex !== 0 && (
            <ArrowBackButton
              onClick={handleBackArrowClick}
              isMobile={isMobile}
            />
          )}{" "}
          {/* todo animate this*/}
          {activeIndex !== 0 && (
            <ArrowForwordButton
              onClick={handleForwardArrowClick}
              isMobile={isMobile}
            />
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
    </PastHackathonsModuleContainer>
  );
};

export default PastHackathons;
