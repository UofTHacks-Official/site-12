import {
  SponsorsButtons,
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
  SponsorsImageBackground2,
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
          <SponsorsImageBackground2
            onClick={() => handleClick(0)}
            aspectRatio={16/4}
          />
          <SponsorsImageLogo
            mobile={isMobile}
            src="/assets/sponsorship/rbc-min.png"
            alt="rbclogo"
            onClick={() => handleClick(0)}
            width={1000}
            height={1000}
            placeholder="blur"
            blurDataURL="/assets/sponsorship/rbc-min.png"
          />
        </SponsorsImageContainer>
        <SponsorsImageContainer>
          <SponsorsImageBackground2
            onClick={() => handleClick(1)}
            aspectRatio={16/4}
          />
          <SponsorsImageLogo
            mobile={isMobile}
            src="/assets/sponsorship/uoftcs-min.png"
            alt="uoftcslogo"
            onClick={() => handleClick(1)}
            width={1000}
            height={1000}
            placeholder="blur"
            blurDataURL="/assets/sponsorship/uoftcs-min.png"
          />
        </SponsorsImageContainer>
        <SponsorsRow>
          <SponsorsColumn>
            <SponsorsImageContainer>
              <SponsorsImageBackground2
                onClick={() => handleClick(2)}
                aspectRatio={16/6}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/ubisoft-min.png"
                alt="ubisoftlogo"
                onClick={() => handleClick(2)}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL="/assets/sponsorship/ubisoft-min.png"
                style={{ width: "25%", height: "auto" }}
              />
            </SponsorsImageContainer>
            <SponsorsImageContainer
              style={{ width: "75%", marginLeft: "auto" }}
            >
              <SponsorsImageBackground2
                onClick={() => handleClick(5)}
                aspectRatio={16/8}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/deepmind-min.png"
                alt="skulelogo"
                onClick={() => handleClick(5)}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL="/assets/sponsorship/deepmind-min.png"
                style={{ width: "75%", height: "auto" }}
              />
            </SponsorsImageContainer>
            <SponsorsImageContainer
              style={{ width: "75%", marginLeft: "auto" }}
            >
              <SponsorsImageBackground2
                onClick={() => handleClick(4)}
                aspectRatio={16/8}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/skule-min.png"
                alt="skulelogo"
                onClick={() => handleClick(4)}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL="/assets/sponsorship/skule-min.png"
                style={{ width: "50%", height: "auto" }}
              />
            </SponsorsImageContainer>

            <SponsorsImageContainer
              style={{ width: "75%", marginLeft: "auto" }}
            >
              <SponsorsImageBackground2
                aspectRatio={16/8}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/warp-min.png"
                alt="warp logo"
                onClick={() => handleClick(6)}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL="/assets/sponsorship/warp-min.png"
                style={{ width: "35%", height: "auto" }}
              />
            </SponsorsImageContainer>
          </SponsorsColumn>
          <SponsorsColumn>
            <SponsorsImageContainer>
              <SponsorsImageBackground2
                aspectRatio={16/6}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/1pass-min.png"
                alt="ubisoftlogo"
                onClick={() => handleClick(3)}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL="/assets/sponsorship/1pass-min.png"
                style={{ width: "50%", height: "auto" }}
              />
            </SponsorsImageContainer>
            <SponsorsImageContainer
              style={{ width: "75%", marginRight: "auto" }}
            >
              <SponsorsImageBackground2
                aspectRatio={16/8}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/google-min.png"
                alt="googlelogo"
                onClick={() => handleClick(14)}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL="/assets/sponsorship/google-min.png"
                style={{ 
                  width: "45%", 
                  height: "auto", 
                  marginTop: isMobile ? "0px" : "5px" 
                }}
              />
            </SponsorsImageContainer>

            <SponsorsImageContainer
              style={{ width: "75%", marginRight: "auto" }}
            >
              <SponsorsImageBackground2
                aspectRatio={16/8}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/dorahacks-min.png"
                alt="dorahackslogo"
                onClick={() => handleClick(7)}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL="/assets/sponsorship/dorahacks-min.png"
                style={{ width: "50%", height: "auto" }}
              />
            </SponsorsImageContainer>
            <SponsorsImageContainer
              style={{ width: "75%", marginRight: "auto" }}
            >
              <SponsorsImageBackground2
                aspectRatio={16/8}
              />
              <SponsorsImageLogo
                mobile={isMobile}
                src="/assets/sponsorship/pg-min.png"
                alt="pg logo"
                onClick={() => handleClick(11)}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL="/assets/sponsorship/pg-min.png"
                style={{ width: "35%", height: "auto" }}
              />
            </SponsorsImageContainer>
          </SponsorsColumn>
        </SponsorsRow>
        <SponsorsRow style={{ justifyContent: "center" }}>
          <SponsorsImageContainer style={{ width: "30%", height: "30%" }}>
            <SponsorsImageBackground2
              aspectRatio={16/8}
            />
            <SponsorsImageLogo
              mobile={isMobile}
              src="/assets/sponsorship/redbull-min.png"
              alt="redbulllogo"
              onClick={() => handleClick(8)}
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="/assets/sponsorship/redbull-min.png"
            />
          </SponsorsImageContainer>
          <SponsorsImageContainer
            style={{
              width: "30%",
              height: "30%",
              marginLeft: "2vw",
              marginRight: "0vh",
            }}
          >
            <SponsorsImageBackground2
              aspectRatio={16/8}
            />
            <SponsorsImageLogo
              mobile={isMobile}
              src="/assets/sponsorship/hatchery-min.png"
              alt="hatcherylogo"
              onClick={() => handleClick(9)}
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="/assets/sponsorship/hatchery-min.png"
            />
          </SponsorsImageContainer>
        </SponsorsRow>
        <SponsorsRow style={{ justifyContent: "center" }}>
          <SponsorsImageContainer style={{ width: "30%", height: "30%" }}>
            <SponsorsImageBackground2
              aspectRatio={16/8}
            />
            <SponsorsImageLogo
              mobile={isMobile}
              src="/assets/sponsorship/voiceflow-min.png"
              alt="redbulllogo"
              onClick={() => handleClick(12)}
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="/assets/sponsorship/voiceflow-min.png"
            />
          </SponsorsImageContainer>
          <SponsorsImageContainer
            style={{ width: "30%", height: "30%", marginLeft: "2vw" }}
          >
            <SponsorsImageBackground2
              aspectRatio={16/8}
            />
            <SponsorsImageLogo
              mobile={isMobile}
              src="/assets/sponsorship/uofte-min.png"
              alt="redbulllogo"
              onClick={() => handleClick(13)}
              width={1000}
              height={1000}
              placeholder="blur"
              blurDataURL="/assets/sponsorship/uofte-min.png"
              style={{ width: "75%", height: "auto" }}
            />
          </SponsorsImageContainer>
        </SponsorsRow>
      </SponsorsContainer>
    </SponsorsModuleContainer>
  );
};

export default Sponsors;
