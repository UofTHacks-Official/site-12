import {
  SponsorsDescription,
  SponsorsModuleContainer,
  SubmitButton,
  SponsorsDescContainer,
  SponsorsModuleBackground,
} from "@/app/modules/sponsors/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Manrope from "@/app/components/shared/fonts/manrope";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";

const Sponsors = () => {
  const isMobile = useMobileDetect() ?? false;
  const spaceGroteskStyleTitle = {
    fontSize: isMobile ? "40px" : "60px",
    textAlign: isMobile ? "left" : "center",
    letterSpacing: isMobile ? "0.2px" : "1px",
  };
  const manropeStyleDesc = {
    fontSize: isMobile ? "15px" : "20px",
    textAlign: isMobile ? "left" : "center",
    color: "black",
  };
  const manropeStyleButton = {
    fontSize: isMobile ? "15px" : "15px",
    color: "white",
  };
  return (
    <SponsorsModuleContainer id="Sponsors-module">
        {/* <SponsorsModuleBackground alt="Sponsors Background" src="/background/sponsors.svg" width={1} height={1}/> */}
      <SponsorsDescContainer mobile={isMobile}>
          <SpaceGrotesk style={spaceGroteskStyleTitle}>
            {isMobile ? "Sponsors" : "Our Sponsors"}
          </SpaceGrotesk>
        <SponsorsDescription mobile={isMobile}>
          <Manrope style={manropeStyleDesc}>
            Join us in shaping the future of innovation at UofTHacks! By
            sponsoring our hackathon, you will gain valuable exposure to a
            diverse community of tech enthusiasts, developers, and aspiring
            entrepreneurs. Showcase your brand, engage with talented
            participants, and support the next generation of leaders in
            technology. Don’t miss this opportunity to connect with bright minds
            and foster creativity.{" "}
          </Manrope>
        </SponsorsDescription>
        <SubmitButton mobile={isMobile}>
          <Manrope style={manropeStyleButton}>Become a Sponsor</Manrope>
        </SubmitButton>
      </SponsorsDescContainer>
      <img
        src="/assets/sponsorship/sponsor-titles.png"
        alt="Sponsorship"
        style={{
          width: "80%",
          height: "auto",
          marginTop: "20px",
          marginBottom: "10%",
        }}
      />
    </SponsorsModuleContainer>
  );
};

export default Sponsors;
