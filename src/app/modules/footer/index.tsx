import {FooterModuleContainer, FooterModuleBackground} from "@/app/modules/footer/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import SocialsContainer from "@/app/components/shared/footer";

const Footer = () => {
    return (
        <FooterModuleContainer id="Footer-module">
            <FooterModuleBackground src="/background/footer.svg"/>
            <SocialsContainer></SocialsContainer>
        </FooterModuleContainer>
    );
};

export default Footer;
