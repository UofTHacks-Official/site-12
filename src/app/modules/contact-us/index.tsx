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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Here you would typically send the data to your backend
  };
  return (
    <ContactUsModuleContainer id="Contact-module">
      <ContactUsModuleBackground src="/background/contact-us.svg" />
      <SpaceGrotesk>
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
        </Container>
      </SpaceGrotesk>
    </ContactUsModuleContainer>
  );
};

export default ContactUs;
