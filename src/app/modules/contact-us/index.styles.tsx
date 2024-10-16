import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";

export const ContactUsModuleContainer = styled(ModuleContainer)`
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px; // Add padding for small screen margins

  @media (max-width: 768px) {
    padding: 20px; // More padding on mobile to prevent zooming effect
    height: auto; // Prevent full height on mobile to avoid stretching
  }
`;

export const ContactUsModuleBackground = styled(ModuleBackground)``;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  gap: 40px;
  position: relative;

  // Media query for mobile devices
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center; // This centers the content on mobile, and we revert the flex-direction on larger screens
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;

  // Adjust layout on mobile
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px; // Prevent form from stretching too much on large screens

  @media (max-width: 768px) {
    max-width: 100%; // Keep it within screen bounds
  }
`;

export const Container = styled.div`
  width: 55%;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const StyledHeader = styled.h3`
  color: var(--Neutral-600, #191a1b);
  font-family: var(--Heading2-fontFamily, "Space Grotesk");
  font-size: var(--Heading2-size, 45px);
  font-style: normal;
  font-weight: var(--Heading2-weight, 700);
  line-height: var(--Heading2-lineHeight, 72px);
  letter-spacing: var(--Heading3-spacing, 0px);

  // Make the text responsive on mobile
  @media (max-width: 768px) {
    font-size: 32px; // Reduce font size on mobile for readability
    line-height: 48px;
    text-align: center; // Center the text on smaller screens
  }
`;

export const StyledParagraph = styled.p`
  color: var(--Neutral-600, #191a1b);
  font-family: var(--Subtitle1-fontFamily, Manrope);
  font-size: var(--Subtitle1-lineHeight, 24px);
  font-style: normal;
  font-weight: var(--Subtitle1-weight, 600);
  line-height: var(--Subtitle1-lineHeight, 36px);
  letter-spacing: var(--Subtitle1-spacing, 0px);
  @media (max-width: 768px) {
    text-align: center; // Revert this to center-align only on mobile if necessary
  }
`;

export const Input = styled.input`
  color: var(--Neutral-600, #191a1b);
  border-radius: 10px;
  border: 1px solid #8edeff;
  background: #fff;
  box-shadow: 0px 0px 50px 0px rgba(182, 255, 246, 0.5);
  width: 48%;
  height: 55px;
  padding: 10px 20px;

  // Make input take full width on mobile
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  color: var(--Neutral-600, #191a1b);
  border-radius: 10px;
  border: 1px solid #8edeff;
  background: #fff;
  box-shadow: 0px 0px 50px 0px rgba(182, 255, 246, 0.5);
  padding: 10px 20px;
  width: 100%;
  height: 150px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const IsometricRoomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;

  // Move IsometricRoomWrapper below the form on mobile
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const IsometricRoomImage = styled.img`
  width: 100%;
  height: auto;
`;
