import {
  AboutUsMobileContainer,
  CenterContainer,
  AboutUsDescription,
  AboutHeader,
  SvgBackgroundContainer,
  StyledIcon,
  StyledTopRightImage,
  StyledBottomRightImage,
  StyledBottomLeftImage,
  StyledKeys
} from "@/app/components/about-us/mobile/index.styles";
import Manrope from "@/app/components/shared/fonts/manrope";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const AboutUsMobile = () => {
  const aboutUsDescription = (
    <>
      <p>
        At UofTHacks, we strive to provide a space where everyone feels
        supported, empowered, and encouraged to transform their dreams into
        reality!
      </p>
      <br />
      <p>
        Our event brings together over 500 innovators, developers, designers,
        and entrepreneurs for a memorable 36-hour in-person hackathon, where
        they collaboratively craft unique and meaningful projects.
      </p>
    </>
  );

  return (
    <AboutUsMobileContainer>
      <SvgBackgroundContainer>
        <StyledIcon
            src="/assets/about/mobile-icons-bkg.svg"
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
      <StyledKeys
        src="/assets/about/new-keys.svg"
        alt="Keys graphic"
        width={100}
        height={100}
      />
      </CenterContainer>
      <StyledTopRightImage
          src="/assets/about/mobile-top.svg"
          alt="Top image"
          width={100}
          height={100}
      />
      <StyledBottomRightImage
        src="/assets/about/mobile-btmright.svg"
        alt="Right img"
        width={100}
        height={100}
      />
      <StyledBottomLeftImage
        src="/assets/about/mobile-btmleft.svg"
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
    </AboutUsMobileContainer>
  );
};

export default AboutUsMobile;
