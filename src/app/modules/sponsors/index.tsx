import {
  SponsorsButtons,
  SponsorsImageBackground,
  SponsorsDescription,
  SponsorsRow,
  SponsorsImageContainer,
  SponsorsImageLogo,
  SponsorsColumn,
  SponsorsContainer,
  SponsorsModuleContainer,
  SubmitButton,
  SponsorsDescContainer,
  SponsorsModuleBackground,
} from "@/app/modules/sponsors/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Manrope from "@/app/components/shared/fonts/manrope";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";
import Image from "next/image";
import { Links } from "./links";

const handleClick = (index: number) => {
  const destination = Links[index];
  if (destination) {
    window.open(destination, "_blank");
  } else {
    console.error("Invalid link index:", index);
  }
};

const handleEmailClick = () => {
  window.open("mailto:sponsor@uofthacks.com", "_blank");
};

const Sponsors = () => {
  const isMobile = useMobileDetect() ?? false;
  const spaceGroteskStyleTitle = {
    fontSize: isMobile ? "24px" : "60px",
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
        <SubmitButton mobile={isMobile} onClick={handleEmailClick}>
          <Manrope style={manropeStyleButton}>Become a Sponsor</Manrope>
        </SubmitButton>
      </SponsorsDescContainer>
      <SponsorsContainer mobile={isMobile}>
        <SponsorsImageContainer>
          <SponsorsImageBackground
            src="/assets/sponsorship/row1.png"
            alt="background"
            onClick={() => handleClick(0)}
            width={2000}
            height={2000}
          />
          <SponsorsImageLogo
            mobile={isMobile}
            src="/assets/sponsorship/rbc.png"
            alt="rbclogo"
            onClick={() => handleClick(0)}
            width={2000}
            height={2000}
          />
        </SponsorsImageContainer>
        <SponsorsImageContainer>
          <SponsorsImageBackground
            src="/assets/sponsorship/row2.png"
            alt="background"
            onClick={() => handleClick(1)}
            width={2000}
            height={2000}
          />
          <SponsorsImageLogo
            mobile={isMobile}
            src="/assets/sponsorship/uoftcs.png"
            alt="uoftcslogo"
            onClick={() => handleClick(1)}
            width={2000}
            height={2000}
          />
        </SponsorsImageContainer>
        <SponsorsRow>
          <SponsorsColumn>
            <SponsorsImageContainer>
              <SponsorsImageBackground
                src="/assets/sponsorship/row3.png"
                alt="background"
                onClick={() => handleClick(2)}
                width={2000}
                height={2000}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/ubisoft.png"
                alt="ubisoftlogo"
                onClick={() => handleClick(2)}
                width={2000}
                height={2000}
                style={{ width: "25%", height: "auto" }}
              />
            </SponsorsImageContainer>
            <SponsorsImageContainer
              style={{ width: "75%", marginLeft: "auto" }}
            >
              <SponsorsImageBackground
                src="/assets/sponsorship/row4-5.png"
                alt="background"
                onClick={() => handleClick(4)}
                width={2000}
                height={2000}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/skule.png"
                alt="skulelogo"
                onClick={() => handleClick(4)}
                width={2000}
                height={2000}
                style={{ width: "50%", height: "auto" }}
              />
            </SponsorsImageContainer>
            <SponsorsImageContainer
              style={{ width: "75%", marginLeft: "auto" }}
            >
              <SponsorsImageBackground
                src="/assets/sponsorship/row4-5.png"
                alt="background"
                onClick={() => handleClick(7)}
                width={2000}
                height={2000}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/dorahacks.png"
                alt="dorahackslogo"
                onClick={() => handleClick(7)}
                width={2000}
                height={2000}
                style={{ width: "50%", height: "auto" }}
              />
            </SponsorsImageContainer>
          </SponsorsColumn>
          <SponsorsColumn>
            <SponsorsImageContainer>
              <SponsorsImageBackground
                src="/assets/sponsorship/row3.png"
                alt="background"
                onClick={() => handleClick(3)}
                width={2000}
                height={2000}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/1pass.png"
                alt="ubisoftlogo"
                onClick={() => handleClick(3)}
                width={2000}
                height={2000}
                style={{ width: "50%", height: "auto" }}
              />
            </SponsorsImageContainer>
            <SponsorsImageContainer
              style={{ width: "75%", marginRight: "auto" }}
            >
              <SponsorsImageBackground
                src="/assets/sponsorship/row4-5.png"
                alt="background"
                onClick={() => handleClick(5)}
                width={2000}
                height={2000}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/deepmind.png"
                alt="skulelogo"
                onClick={() => handleClick(5)}
                width={2000}
                height={2000}
                style={{ width: "75%", height: "auto" }}
              />
            </SponsorsImageContainer>
            <SponsorsImageContainer
              style={{ width: "75%", marginRight: "auto" }}
            >
              <SponsorsImageBackground
                src="/assets/sponsorship/row4-5.png"
                alt="background"
                onClick={() => handleClick(6)}
                width={2000}
                height={2000}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/warp.png"
                alt="dorahackslogo"
                onClick={() => handleClick(6)}
                width={2000}
                height={2000}
                style={{ width: "35%", height: "auto" }}
              />
            </SponsorsImageContainer>
          </SponsorsColumn>
        </SponsorsRow>
        <SponsorsRow style={{ justifyContent: "center" }}>
          <SponsorsImageContainer style={{ width: "30%", height: "30%" }}>
            <SponsorsImageBackground
              src="/assets/sponsorship/row6.png"
              alt="test"
              onClick={() => handleClick(8)}
              width={2000}
              height={2000}
            />
            <SponsorsImageLogo
              mobile={isMobile}
              src="/assets/sponsorship/redbull.png"
              alt="redbulllogo"
              onClick={() => handleClick(8)}
              width={2000}
              height={2000}
            />
          </SponsorsImageContainer>
          <SponsorsImageContainer
            style={{
              width: "30%",
              height: "30%",
              marginLeft: "2vh",
              marginRight: "2vh",
            }}
          >
            <SponsorsImageBackground
              src="/assets/sponsorship/row6.png"
              alt="test"
              onClick={() => handleClick(9)}
              width={2000}
              height={2000}
            />
            <SponsorsImageLogo
              mobile={isMobile}
              src="/assets/sponsorship/hatchery.png"
              alt="hatcherylogo"
              onClick={() => handleClick(9)}
              width={2000}
              height={2000}
            />
          </SponsorsImageContainer>
          <SponsorsImageContainer
            style={{
              width: "30%",
              height: "30%",
            }}
          >
            <SponsorsImageBackground
              src="/assets/sponsorship/row6.png"
              alt="test"
              onClick={() => handleClick(10)}
              width={2000}
              height={2000}
            />
            <SponsorsImageLogo
              mobile={isMobile}
              src="/assets/sponsorship/wics.png"
              alt="hatcherylogo"
              onClick={() => handleClick(10)}
              width={2000}
              height={2000}
            />
          </SponsorsImageContainer>
        </SponsorsRow>
      </SponsorsContainer>
      ƒ
      {/* <img
        src="/assets/sponsorship/sponsor-titles.png"
        alt="Sponsorship"
        style={{
          width: "80%",
          height: "auto",
          marginTop: "20px",
          marginBottom: "10%",
        }}
      /> */}
    </SponsorsModuleContainer>
  );
};

export default Sponsors;
