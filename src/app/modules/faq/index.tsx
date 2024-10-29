import {
    FAQModuleContainer,
    FAQModuleBackground, StyledContentContainer, StyledAccordionContainer,
} from "@/app/modules/faq/index.styles";
import {SpaceGroteskSectionTitle} from "@/app/components/shared/fonts/space-grotesk";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";
import AccordianComponent from "@/app/components/accordion-component";
import {FAQItems} from "@/app/modules/faq/faqs";

const FAQ = () => {
    const $isMobile = useMobileDetect();
    return (
        <FAQModuleContainer id="FAQ-module">
            <FAQModuleBackground src="/background/faq.svg" alt="faq module background"/>
            <StyledContentContainer isMobile={$isMobile}>
                <SpaceGroteskSectionTitle isMobile={$isMobile}>FAQ</SpaceGroteskSectionTitle>
                <StyledAccordionContainer>
                    {FAQItems.map((item, index) => (
                        <AccordianComponent key={index} title={item.title} content={item.content}/>
                    ))}
                </StyledAccordionContainer>
            </StyledContentContainer>
        </FAQModuleContainer>
    );
};

export default FAQ;
