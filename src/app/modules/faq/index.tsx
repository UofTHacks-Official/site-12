import {FAQModuleContainer, FAQModuleBackground} from "@/app/modules/faq/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const FAQ = () => {
    return (
        <FAQModuleContainer id="FAQ-module">
            <FAQModuleBackground src="/background/faq.svg"/>
            <SpaceGrotesk>FAQ section</SpaceGrotesk>
        </FAQModuleContainer>
    );
};

export default FAQ;
