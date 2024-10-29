import {
  AboutUsContainer,
  CenterContainer,
  AboutUsDescription,
  AboutHeader,
  SvgBackgroundContainer,
  StyledIcon,
  StyledLeftImage,
  StyledMobileImage,
  StyledRightImage,
  StyledKeys,
} from "@/app/components/about-us/index.styles";
import Manrope from "@/app/components/shared/fonts/manrope";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";

const AboutUs = () => {
  const isMobile = useMobileDetect();
  const aboutUsDescription = (
    <>
      <p>
        At UofTHacks, we&apos;re all about turning dreams into reality in a
        space where everyone feels supported, empowered, and inspired. Whether
        you&apos;re a seasoned developer or a first-time hacker, we&apos;re here
        to help you unlock your potential and bring your vision to life!
      </p>
      <br />
      <p>
        Join a dynamic community of over 500 developers, designers, innovators,
        and entrepreneurs for an unforgettable 36-hour in-person hackathon. From
        brainstorming wild ideas to crafting projects that make a difference,
        UofTHacks is where passion meets purpose and dreams become reality.
      </p>
    </>
  );

  return (
    <AboutUsContainer isMobile={isMobile}>
      <SvgBackgroundContainer isMobile={isMobile}>
        <StyledIcon
          src={
            isMobile
              ? "/assets/about/mobile-icons-bkg.svg"
              : "/assets/about/about-icons-bkg.svg"
          }
          alt="Background Graphics"
          width={100}
          height={100}
        />
      </SvgBackgroundContainer>
      <CenterContainer isMobile={isMobile}>
        <SpaceGrotesk>
          <AboutHeader isMobile={isMobile}>
            Canada’s 1st student-run hackathon
          </AboutHeader>
        </SpaceGrotesk>
        <Manrope>
          <AboutUsDescription>{aboutUsDescription}</AboutUsDescription>
        </Manrope>
        <StyledLeftImage
          isMobile={isMobile}
          src={isMobile ? "/assets/about/left-image.png" : "/assets/about/left-image.svg"}
          alt="Left img"
          width={200} height={200}
          quality={100}
        />
        {isMobile && (
          <StyledMobileImage
            src="/assets/about/mobile-btmright.png"
            alt="Right img"
            width={200} height={200}
            quality={100}
          />
        )}
        <StyledRightImage
          isMobile={isMobile}
          src={isMobile ? "/assets/about/right-image.png" : "/assets/about/right-image.svg"}
          alt="Right img"
          width={200} height={200}
          quality={100}
        />
        <StyledKeys
          isMobile={isMobile}
          src="/assets/about/new-keys.svg"
          alt="Keys graphic"
          width={200} height={200}
        />
      </CenterContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
