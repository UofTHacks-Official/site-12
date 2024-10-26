import styled from "styled-components";
import {ModuleBackground, ModuleContainer} from "@/app/components/shared/containers/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Manrope from "@/app/components/shared/fonts/manrope";
import {StyledIcon} from "@/app/components/about-us/mobile/index.styles";

type MobileProps = {
    isMobile?: boolean | null;
}

export const ContactUsModuleContainer = styled(ModuleContainer)`
    height: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContactUsModuleBackground = styled(ModuleBackground)`
    height: 100%;
    
`;

export const InputWrapper = styled.div<MobileProps>`
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
    gap: 20px;
`;

export const FormContainer = styled.form<MobileProps>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: ${(props) => (props.isMobile ? "100%" : "500px")};
    width: 100%;
`;

export const Container = styled.div<MobileProps>`
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
    justify-content: ${({ isMobile }) => (isMobile ? "center" : "center")};
    align-items: ${({ isMobile }) => (isMobile ? "center" : "center")};
    gap: ${({ isMobile }) => (isMobile ? "20px" : "30px")};
    width: 100%;
    padding: ${({ isMobile }) => (isMobile ? "20px" : "40px")};
    max-width: 1200px;
    margin: 0 auto;
`;

export const StyledHeader = styled(SpaceGrotesk)<MobileProps>`
    color: var(--Neutral-600, #191a1b);
    font-size: ${({isMobile}) => (isMobile ? "32px" : "45px")};
    font-weight: var(--Heading2-weight, 700);
    line-height: ${({isMobile}) => (isMobile ? "48px" : "72px")};
    margin-bottom: ${({isMobile}) => (isMobile ? "10px" : "20px")};
    padding-top: ${({isMobile}) => (isMobile ? "30px" : "0px")};
    text-align: left;
    letter-spacing: 0rem;
`;

export const StyledParagraph = styled(Manrope)<MobileProps>`
    width: ${({isMobile}) => (isMobile ? "100%" : "549px")};
    color: var(--Neutral-600, #191a1b);
    font-size: ${({isMobile}) => (isMobile ? "18px" : "24px")};
    font-weight: var(--Subtitle1-weight, 600);
    line-height: ${({isMobile}) => (isMobile ? "28px" : "36px")};
    text-align: left;
    margin-bottom: 20px;
`;

export const StyledFormResponsePrompt = styled(StyledParagraph)<MobileProps>`
    font-size: ${({isMobile}) => (isMobile ? "14px" : "18px")};
    padding: 0;
    line-height: 10px;
`;


export const Input = styled.input<MobileProps>`
    border-radius: 10px;
    border: 1px solid #8edeff;
    background: #fff;
    box-shadow: 0px 0px 50px 0px rgba(182, 255, 246, 0.5);
    width: ${({isMobile}) => (isMobile ? "100%" : "260px")};
    height: 55px;
    color: black;
    font-family: 'Manrope', sans-serif;
    padding: 10px 20px;
`;

export const TextArea = styled.textarea<MobileProps>`
    width: 100%;
    resize: none;
    height: 110px;
    padding: 18px;
    border-radius: 10px;
    color: black;
    border: 1px solid #8edeff;
    background: #fff;
    font-family: 'Manrope', sans-serif;
    box-shadow: 0px 0px 50px 0px rgba(182, 255, 246, 0.5);
`;

export const ManropeSubmitButtonText = styled(Manrope)`
    color: var(--Neutral-100, #FFF);
    font-size: var(--Subtitle2-size, 15px);
    font-weight: var(--Subtitle2-weight, 600);
    line-height: var(--Subtitle2-lineHeight, 32px);
`;

export const SubmitButton = styled.button<MobileProps>`
    border-radius: 16px;
    border: 0px;
    color: white;
    background: #225c90;
    width: ${({isMobile}) => (isMobile ? "100%" : "150px")};
    height: 45px;
    transition: background 0.3s ease;

    &:hover {
        background: #1a4871;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;

export const ContactUsRenderIcon = styled(StyledIcon)<{ isMobile?: boolean | null }>`
    width: ${({ isMobile }) => (isMobile ? '180px' : '360px')};
    height: ${({ isMobile }) => (isMobile ? '180px' : '360px')};
`;