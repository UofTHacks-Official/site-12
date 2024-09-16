import React, {useState} from "react";
import {
    ContactUsModuleContainer,
    FormContainer,
    Input,
    TextArea,
    SubmitButton,
    StyledHeader,
    StyledParagraph,
    Container,
    InputWrapper,
    ManropeSubmitButtonText, ContactUsModuleBackground,
} from "./index.styles";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";

const ContactUs = () => {
    const isMobile = useMobileDetect();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form data:", formData);
    };

    return (
        <ContactUsModuleContainer id="Contact-module">
            <ContactUsModuleBackground src="/background/contact-us.svg"/>
            <Container isMobile={isMobile}>
                <StyledHeader isMobile={isMobile}>Contact Us</StyledHeader>
                <StyledParagraph isMobile={isMobile}>
                    Interested in learning more?
                </StyledParagraph>
                <FormContainer onSubmit={handleSubmit} isMobile={isMobile}>
                    <InputWrapper isMobile={isMobile}>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            isMobile={isMobile}
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            isMobile={isMobile}
                        />
                    </InputWrapper>
                    <TextArea
                        name="reason"
                        placeholder="Reason for contacting us..."
                        value={formData.reason}
                        onChange={handleChange}
                        isMobile={isMobile}
                    />
                    <SubmitButton type="submit" isMobile={isMobile}>
                        <ManropeSubmitButtonText>
                            Submit
                        </ManropeSubmitButtonText>
                    </SubmitButton>
                </FormContainer>
            </Container>
        </ContactUsModuleContainer>
    );
};

export default ContactUs;
