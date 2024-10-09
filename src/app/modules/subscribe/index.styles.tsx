import styled from "styled-components";
import {ModuleBackground, ModuleContainer} from "@/app/components/shared/containers/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Manrope from "@/app/components/shared/fonts/manrope";

type MobileProps = {
    isMobile?: boolean | null;
}

export const SubscribeModuleContainer = styled(ModuleContainer)`
    height: 100vh;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SubscribeModuleBackground = styled(ModuleBackground)``;

export const InputWrapper = styled.div<MobileProps>`
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
    align-items: center;
    gap: 10px;
    width: 95%;
`;

export const FormContainer = styled.form<MobileProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
`;

export const Container = styled.div<MobileProps>`
    text-align: left;
    padding: ${({isMobile}) => (isMobile ? "20px" : "0")};
`;

export const StyledHeader = styled(Manrope)<MobileProps>`
    width: ${({isMobile}) => (isMobile ? "100%" : "549px")};
    color: var(--Neutral-600, #191a1b);
    font-size: ${({isMobile}) => (isMobile ? "20px" : "24px")};
    font-weight: var(--Subtitle1-weight, 600);
    line-height: ${({isMobile}) => (isMobile ? "28px" : "36px")};
    text-align: center;
    margin-bottom: 20px;
`;

export const StyledParagraph = styled(Manrope)<MobileProps>`
    width: ${({isMobile}) => (isMobile ? "100%" : "549px")};
    color: var(--Neutral-600, #191a1b);
    font-size: ${({isMobile}) => (isMobile ? "15px" : "18px")};
    font-weight: var(--Subtitle1-weight, 600);
    line-height: ${({isMobile}) => (isMobile ? "28px" : "36px")};
    text-align: center;
    margin-top: 20px;
`;

export const Input = styled.input<MobileProps>`
    border-radius: 10px;
    border: 1px solid #8edeff;
    background: #fff;
    width: 100%;
    height: 40px;
    font-family: 'Manrope', sans-serif;
    padding: 10px 20px;
`;

export const ManropeSubmitButtonText = styled(Manrope)`
    color: var(--Neutral-100, #FFF);
    font-size: var(--Subtitle2-size, 15px);
    font-weight: var(--Subtitle2-weight, 400);
    line-height: var(--Subtitle2-lineHeight, 32px);
`;

export const SubmitButton = styled.button<MobileProps>`
    border-radius: 8px;
    border: 0px;
    color: white;
    background: #225c90;
    width: 150px;
    height: 40px;
    transition: background 0.3s ease;

    &:hover {
        background: #1a4871;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;
