import { AboutUsModuleBackground, AboutUsModuleContainer, LeftContainer, AboutUsDescription, RightContainer, ImagesContainer } from "@/app/modules/about-us/index.styles";
import Manrope from "@/app/components/shared/fonts/manrope";
import Image from "next/image";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const AboutUs = () => {
  const aboutUsDescription = (
    <>
      <p>
        At UofTHacks, we strive to provide a space where everyone feels supported, empowered, and encouraged to transform their dreams into reality!
      </p>
      <br></br>
      <p>
        Our event brings together over 500 innovators, developers, designers, and entrepreneurs for a memorable 36-hour in-person hackathon, where they collaboratively craft unique and meaningful projects.
      </p>
    </>
  );

  return (
    <AboutUsModuleContainer>
        <AboutUsModuleBackground src="/background/about-us.svg" />
        <LeftContainer>
            <SpaceGrotesk>
                <h1>Canada's first <br></br> student-run hackathon</h1>
            </SpaceGrotesk>
            <Manrope>
                <AboutUsDescription>{aboutUsDescription}</AboutUsDescription>
            </Manrope>
        </LeftContainer>

        <ImagesContainer>
            <Image src="/assets/about/about-1.svg" alt="UofT Hacks executive speaking to a crowd" width={160} height={160} />
            <Image src="/assets/about/about-2.svg" alt="UofT Hacks sponsors" width={350} height={200} />
            <Image src="/assets/about/about-3.svg" alt="UofT Hacks executive speaking to a crowd" width={400} height={200} />
        </ImagesContainer>
    </AboutUsModuleContainer>
  );
};

export default AboutUs;