import {ContactUsModuleContainer, ContactUsModuleBackground} from "@/app/modules/contact-us/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const ContactUs = () => {
    return (
        <ContactUsModuleContainer id="Contact-module">
            <ContactUsModuleBackground src="/background/contact-us.svg"/>
            <SpaceGrotesk>contact us section</SpaceGrotesk>
        </ContactUsModuleContainer>
    );
};

export default ContactUs;
