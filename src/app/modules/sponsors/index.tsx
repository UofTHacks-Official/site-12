import {
  SponsorsButtons,
  SponsorsImage,
  SponsorsDescription,
  SponsorsRow,
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
        {/* <SponsorsDescription mobile={isMobile}>
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
        </SubmitButton> */}
      </SponsorsDescContainer>
      <SponsorsContainer>
        <SponsorsButtons key={0}>
          <SponsorsImage
            src="/assets/sponsorship/rbc.png"
            alt="test"
            onClick={() => handleClick(0)}
            width={1000}
            height={1000}
          />
          <SponsorsImage
            src="/assets/sponsorship/uoftcs.png"
            alt="test"
            onClick={() => handleClick(1)}
            width={1000}
            height={1000}
          />
        </SponsorsButtons>
        <SponsorsRow>
          <SponsorsColumn>
            <SponsorsImage
              src="/assets/sponsorship/ubisoft.png"
              alt="test"
              onClick={() => handleClick(2)}
              width={1000}
              height={1000}
            />
            <SponsorsImage
              src="/assets/sponsorship/skule.png"
              alt="test"
              onClick={() => handleClick(4)}
              width={1000}
              height={1000}
              style={{ width: "75%", height: "75%", marginLeft: "auto" }}
            />
            <SponsorsImage
              src="/assets/sponsorship/warp.png"
              alt="test"
              onClick={() => handleClick(6)}
              width={1000}
              height={1000}
              style={{ width: "75%", height: "75%", marginLeft: "auto" }}
            />
          </SponsorsColumn>
          <SponsorsColumn>
            <SponsorsImage
              src="/assets/sponsorship/1pass.png"
              alt="test"
              onClick={() => handleClick(3)}
              width={1000}
              height={1000}
            />
            <SponsorsImage
              src="/assets/sponsorship/googledeepmind.png"
              alt="test"
              onClick={() => handleClick(5)}
              width={1000}
              height={1000}
              style={{ width: "75%", height: "75%", marginRight: "auto" }}
            />
            <SponsorsImage
              src="/assets/sponsorship/dorahacks.png"
              alt="test"
              onClick={() => handleClick(7)}
              width={1000}
              height={1000}
              style={{ width: "75%", height: "75%", marginRight: "auto" }}
            />
          </SponsorsColumn>
        </SponsorsRow>
        <SponsorsRow style={{justifyContent: 'center'}}>
          <SponsorsImage
            src="/assets/sponsorship/redbull.png"
            alt="test"
            onClick={() => handleClick(8)}
            width={1000}
            height={1000}
            style={{ width: "30%", height: "30%" }}
          />
          <SponsorsImage
            src="/assets/sponsorship/hatchery.png"
            alt="test"
            onClick={() => handleClick(9)}
            width={1000}
            height={1000}
            style={{ width: "30%", height: "30%", marginLeft: '2vh', marginRight: '2vh'}}
          />
          <SponsorsImage
            src="/assets/sponsorship/wics.png"
            alt="test"
            onClick={() => handleClick(10)}
            width={1000}
            height={1000}
            style={{ width: "30%", height: "30%"}}
          />
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
