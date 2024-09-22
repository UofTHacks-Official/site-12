import {
  AboutUsModuleBackground,
  AboutUsModuleContainer,
  LeftContainer,
  AboutUsDescription,
  AboutGraphic,
  ImagesContainer,
  StyledImage,
} from "@/app/modules/about-us/index.styles";
import Manrope from "@/app/components/shared/fonts/manrope";
import Image from "next/image";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const AboutUs = () => {
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
    <AboutUsModuleContainer>
      <AboutUsModuleBackground src="/background/about-us.svg" />
      <LeftContainer>
        <SpaceGrotesk>
          <h1>
            Canada’s <span className="highlight">first</span> <br /> student-run
            hackathon
          </h1>
        </SpaceGrotesk>
        <AboutGraphic
          src="/assets/about/Graphic.svg"
          alt="Gradient Graphic"
          width={75}
          height={75}
        />
        <Manrope>
          <AboutUsDescription>{aboutUsDescription}</AboutUsDescription>
        </Manrope>
      </LeftContainer>

      <ImagesContainer>
        <StyledImage
          src="/assets/about/about-1.svg"
          alt="UofT Hacks executive speaking to a crowd"
          width={160}
          height={160}
        />
        <StyledImage
          src="/assets/about/about-2.svg"
          alt="UofT Hacks sponsors"
          width={350}
          height={200}
        />
        <StyledImage
          src="/assets/about/about-3.svg"
          alt="UofT Hacks executive speaking to a crowd"
          width={400}
          height={200}
        />
        <Image
          src="/assets/about/Keys.svg"
          alt="Keys Icon"
          width={75}
          height={170}
        />
      </ImagesContainer>
    </AboutUsModuleContainer>
  );
};

export default AboutUs;
