import React, {useEffect, useState} from "react";
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
    ManropeSubmitButtonText, ContactUsModuleBackground, ContactUsRenderIcon, StyledFormResponsePrompt,
} from "./index.styles";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";
import {Stack} from "@mui/material";

const ContactUs = () => {
    const isMobile = useMobileDetect();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
    });
    const [responseMsg, setResponseMsg] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResponseMsg("");

        if (!formData.name || !formData.email || !formData.reason) {
            setResponseMsg("Please fill out all fields.")
            return
        }

        const endpoint = "https://api.uofthacks.com/12/email_list/contact_us";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                setResponseMsg("Thank you for contacting us! We'll get back to you shortly.");
            } else if (response.status === 400) {
                const responseData = await response.json();
                if (responseData.message.includes("invalid")) {
                    setResponseMsg("The email you entered is invalid, please try again.");
                }
            } else {
                setResponseMsg("Error submitting contact request.");
            }
        } catch (error) {
            setResponseMsg("Something went wrong. Please try again.");
        }
    };

    return (
        <ContactUsModuleContainer id="Contact-module">
            <ContactUsModuleBackground src="/background/contact-us.svg"/>
            <Container isMobile={isMobile}>
                <Stack>
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
                        <StyledFormResponsePrompt isMobile={isMobile}>
                            {responseMsg}
                        </StyledFormResponsePrompt>
                    </FormContainer>
                </Stack>
                <Stack>
                    <ContactUsRenderIcon
                        src={"/assets/icons/isometric-room.svg"}
                        alt="isometric room"
                        width={100}
                        height={100}
                        isMobile={isMobile}
                    />
                </Stack>
            </Container>
        </ContactUsModuleContainer>
    );
};

export default ContactUs;
