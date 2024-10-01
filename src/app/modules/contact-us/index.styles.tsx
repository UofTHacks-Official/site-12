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
`;

export const ContactUsModuleBackground = styled(ModuleBackground)``;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  gap: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const FormContainer = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Container = styled.div`
  width: 55%;
  text-align: left;
`;

export const StyledHeader = styled.h3`
  color: var(--Neutral-600, #191a1b);
  font-family: var(--Heading2-fontFamily, "Space Grotesk");
  font-size: var(--Heading2-size, 45px);
  font-style: normal;
  font-weight: var(--Heading2-weight, 700);
  line-height: var(--Heading2-lineHeight, 72px);
  letter-spacing: var(--Heading3-spacing, 0px);
`;

export const StyledParagraph = styled.p`
  color: var(--Neutral-600, #191a1b);
  font-family: var(--Subtitle1-fontFamily, Manrope);
  font-size: var(--Subtitle1-lineHeight, 24px);
  font-style: normal;
  font-weight: var(--Subtitle1-weight, 600);
  line-height: var(--Subtitle1-lineHeight, 36px);
  letter-spacing: var(--Subtitle1-spacing, 0px);
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #8edeff;
  background: #fff;
  box-shadow: 0px 0px 50px 0px rgba(182, 255, 246, 0.5);
  display: flex;
  width: 48%;
  height: 55px;
  padding: 10px 20px;
  align-items: flex-start;
`;

export const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  height: 110px;
  padding: 8px 18px;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid #8edeff;
  background: #fff;
  box-shadow: 0px 0px 50px 0px rgba(182, 255, 246, 0.5);
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: #225c90;
  backdrop-filter: blur(6px);
  width: 150px;
  height: 45px;
  color: white;
  border: none;
  cursor: pointer;
`;

export const IsometricRoomWrapper = styled.div`
  width: 45%;
  aspect-ratio: 1 / 1;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

export const IsometricRoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
