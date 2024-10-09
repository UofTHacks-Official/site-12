import React, {useState} from "react";
import {
    SubscribeModuleContainer,
    FormContainer,
    Input,
    SubmitButton,
    StyledHeader,
    StyledParagraph,
    Container,
    InputWrapper,
    ManropeSubmitButtonText, SubscribeModuleBackground,
} from "./index.styles";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";

const Subscribe = () => {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form data:", formData);
        setResponseMsg("Thank you for subscribing!");
    };

    return (
        <SubscribeModuleContainer id="Subscribe-module">
            <SubscribeModuleBackground src="/background/sponsors.svg"/>
            <Container isMobile={isMobile}>
                <StyledHeader isMobile={isMobile}>
                Be the first to find out when applications are out!
                </StyledHeader>
                <FormContainer onSubmit={handleSubmit} isMobile={isMobile}>
                    <InputWrapper isMobile={isMobile}>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            isMobile={isMobile}
                        />
                        <SubmitButton type="submit" isMobile={isMobile}>
                        <ManropeSubmitButtonText>
                            Subscribe
                        </ManropeSubmitButtonText>
                    </SubmitButton>
                    </InputWrapper>
                </FormContainer>
                <StyledParagraph isMobile={isMobile}>
                {responseMsg}
                </StyledParagraph>
            </Container>
        </SubscribeModuleContainer>
    );
};

export default Subscribe;
