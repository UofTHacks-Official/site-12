import {
  AboutUsDesktopContainer,
  CenterContainer,
  AboutUsDescription,
  AboutHeader,
  SvgBackgroundContainer,
  StyledIcon,
  StyledLeftImage,
  StyledRightImage,
  StyledKeys
} from "@/app/components/about-us/desktop/index.styles";
import Manrope from "@/app/components/shared/fonts/manrope";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const AboutUsDesktop = () => {
  const aboutUsDescription = (
    <>
      <p>
        At UofTHacks, we strive to provide a space where everyone feels
        supported, empowered, and encouraged to transform their dreams into
        reality!
      </p>
      <br></br>
      <p>
        Our event brings together over 500 innovators, developers, designers,
        and entrepreneurs for a memorable 36-hour in-person hackathon, where
        they collaboratively craft unique and meaningful projects.
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
          <AboutHeader>
            Canada’s 1st student-run hackathon
          </AboutHeader>
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
