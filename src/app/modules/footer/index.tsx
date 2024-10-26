import {FooterModuleContainer, FooterModuleBackground} from "@/app/modules/footer/index.styles";
import SocialsContainer from "@/app/components/shared/footer";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";

const Footer = () => {
    const isMobile = useMobileDetect()
    return (
        <FooterModuleContainer id="Footer-module">
            <FooterModuleBackground src={isMobile ? "/background/footer-mobile.svg" : "/background/footer.svg"}/>
            <SocialsContainer/>
        </FooterModuleContainer>
    );
};

export default Footer;
