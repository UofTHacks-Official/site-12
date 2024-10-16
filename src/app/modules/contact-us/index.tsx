import React, { useState } from "react";
import {
  ContactUsModuleContainer,
  ContactUsModuleBackground,
  FormContainer,
  Input,
  TextArea,
  SubmitButton,
  StyledHeader,
  StyledParagraph,
  Container,
  InputWrapper,
  IsometricRoomWrapper,
  IsometricRoomImage,
  ContentWrapper,
} from "./index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponseMsg(""); // Clear previous messages

    const endpoint = "https://api.uofthacks.com/12/email_list/add";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          reason: formData.reason,
          email: formData.email,
        }),
      });

      if (response.status === 200) {
        setResponseMsg("Your message has been sent");
      } else if (response.status === 400) {
        const responseData = await response.json();
        if (responseData.message.includes("invalid")) {
          setResponseMsg("We couldn't receive your message, check your email.");
        } else {
          setResponseMsg("We couldn't receive your message try again later.");
        }
      } else {
        setResponseMsg("Error submitting email.");
      }
    } catch (error) {
      setResponseMsg("Error submitting email.");
    }
  };

  return (
    <ContactUsModuleContainer id="Contact-module">
      <ContactUsModuleBackground src="/background/contact-us.svg" />
      <SpaceGrotesk>
        <ContentWrapper>
          <Container>
            <StyledHeader>Contact Us</StyledHeader>
            <StyledParagraph>Interested in learning more?</StyledParagraph>
            <FormContainer onSubmit={handleSubmit}>
              <InputWrapper>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputWrapper>
              <TextArea
                name="reason"
                placeholder="Reason for contacting us..."
                value={formData.reason}
                onChange={handleChange}
              />
              <SubmitButton type="submit">Submit</SubmitButton>
            </FormContainer>
            <StyledParagraph>{responseMsg}</StyledParagraph>
          </Container>
          <IsometricRoomWrapper>
            <IsometricRoomImage src="/isometricRoom.svg" alt="Isometric Room" />
          </IsometricRoomWrapper>
        </ContentWrapper>
      </SpaceGrotesk>
    </ContactUsModuleContainer>
  );
};

export default ContactUs;
