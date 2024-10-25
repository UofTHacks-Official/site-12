import { useState, useRef, useEffect } from "react";
import {
  PastHackathonsModuleContainer,
  PastHackathonsModuleTitle,
  PastHackathonsModuleCardsContainer,
  IntroCardContainer,
  IntroCardWrapper,
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
import { SvgBackgroundContainer } from "@/app/components/about-us/desktop/index.styles";

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
      subText:
        "UofTHacks 8 embodied 'Connectivity', bringing hackers together in a virtual space to build projects that bridged gaps and strengthened connections.",
      padding: isMobile ? "10px" : "20px",
      borderRadius: isMobile ? "25px" : "45px",
      img1: "8-1.png",
      img2: "8-x.png",
      img3: "8-xx.png",
    },
    {
      colour: "#bae9fd",
      year: "9",
      theme: "Restoration",
      subText:
        "UofTHacks 9 focused on 'Restoration', as hackers worked virtually to revive and reimagine ideas, creating solutions that sparked renewal.",
      padding: isMobile ? "10px" : "20px",
      borderRadius: isMobile ? "25px" : "45px",
      img1: "9-1.jpg",
      img2: "9-2.png",
      img3: "9-3.jpg",
    },
    {
      colour: "#b5fff7",
      year: "10",
      theme: "Exploration",
      subText:
        "UofTHacks 10 launched us into 'Exploration', where hackers ventured into new frontiers, pushing the limits of innovation and creativity.",
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
        "UofTHacks 11 took us on a nostalgic journey, using the past as inspiration to shape imaginative, forward-thinking creations.",
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
    letterSpacing: "0.05px",
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
    shouldAnimate.current = true;
    setActiveIndex(targetSlide);
  };

  useEffect(() => {
    if (isMobile) {
      setActiveIndex(1);
    }
  }, [isMobile]);

  const IntroCards = () => {
    return (
      <IntroCardContainer>
        <IntroCardWrapper>
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
            styles="bottom: 5%; right: 0;"
            z="0"
            r="-6.19deg"
            id={3}
          />
          {/* top right */}
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
            styles="top: 3%; right: 18%;"
            z="1"
            r="-17.55deg"
            id={2}
          />
          {/* bottom left */}
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
            styles="bottom: 0; left: 18%;"
            z="2"
            r="9.27deg"
            id={1}
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
            styles="top: 0; left: 0;"
            z="3"
            r="-8.12deg"
            id={0}
          />
        </IntroCardWrapper>
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
          {activeIndex !== 0 && activeIndex !== 1 && (
            <ArrowBackButton
              onClick={handleBackArrowClick}
              isMobile={isMobile}
            />
          )}{" "}
          {/* todo animate this*/}
          {activeIndex !== 0 && activeIndex !== 4 && (
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
            height={"800px"}
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
