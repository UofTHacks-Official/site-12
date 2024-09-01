import {FooterModuleContainer, FooterModuleBackground} from "@/app/modules/footer/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const Footer = () => {
    return (
        <FooterModuleContainer id="Footer-module">
            <FooterModuleBackground src="/background/footer.svg"/>
            <SpaceGrotesk>Footer section</SpaceGrotesk>
        </FooterModuleContainer>
    );
};

export default Footer;
