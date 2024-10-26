import React, { useState } from "react";
import {
  SubscribeModuleContainer,
  FormContainer,
  Input,
  SubmitButton,
  StyledHeader,
  StyledParagraph,
  Container,
  InputWrapper,
  ManropeSubmitButtonText,
} from "./index.styles";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";

const Subscribe = () => {
  const isMobile = useMobileDetect();
  const [formData, setFormData] = useState({
    email: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
          hacker_email: formData.email,
        }),
      });

      if (response.status === 200) {
        setResponseMsg(
          "Your email has successfully been added to the mailing list!"
        );
      } else if (response.status === 400) {
        const responseData = await response.json();
        if (responseData.message.includes("invalid")) {
          setResponseMsg("The email you entered is invalid, please try again.");
        } else {
          setResponseMsg(
            "Your email has already been added to the mailing list."
          );
        }
      } else {
        setResponseMsg("Error submitting email.");
      }
    } catch (error) {
      setResponseMsg("Error submitting email.");
    }
  };

  return (
    <SubscribeModuleContainer id="Subscribe-module">
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
              required
            />
            <SubmitButton type="submit" isMobile={isMobile}>
              <ManropeSubmitButtonText>Subscribe</ManropeSubmitButtonText>
            </SubmitButton>
          </InputWrapper>
        </FormContainer>
        <StyledParagraph isMobile={isMobile}>{responseMsg}</StyledParagraph>
      </Container>
    </SubscribeModuleContainer>
  );
};

export default Subscribe;
