import {
  AboutUsDesktopContainer,
  CenterContainer,
  AboutUsDescription,
  AboutHeader,
  SvgBackgroundContainer,
  StyledIcon,
  StyledLeftImage,
  StyledRightImage,
  StyledKeys,
} from "@/app/components/about-us/desktop/index.styles";
import Manrope from "@/app/components/shared/fonts/manrope";
import Image from "next/image";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const AboutUsDesktop = () => {
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
    <AboutUsDesktopContainer>
      <SvgBackgroundContainer>
        <StyledIcon
          src="/assets/about/about-icons-bkg.svg"
          alt="Background Graphics"
          width={100}
          height={100}
        />
      </SvgBackgroundContainer>
      <CenterContainer>
        <SpaceGrotesk>
          <AboutHeader>Canada’s 1st student-run hackathon</AboutHeader>
        </SpaceGrotesk>
        <Manrope>
          <AboutUsDescription>{aboutUsDescription}</AboutUsDescription>
        </Manrope>
        <StyledLeftImage
          src="/assets/about/left-image.svg"
          alt="Left img"
          width={100}
          height={100}
        />
        <StyledRightImage
          src="/assets/about/right-image.svg"
          alt="Right img"
          width={100}
          height={100}
        />
        <StyledKeys
          src="/assets/about/new-keys.svg"
          alt="Keys graphic"
          width={100}
          height={100}
        />
      </CenterContainer>
    </AboutUsDesktopContainer>
  );
};

export default AboutUsDesktop;
