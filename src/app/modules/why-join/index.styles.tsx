import styled from "styled-components";
import { ModuleBackground, ModuleContainer } from "@/app/components/shared/containers/index.styles";

const WhyJoinModuleContainer = styled(ModuleContainer)`
    height: 150vh;
    min-height: 600px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 160px 290px 290px;
    position: relative;

    @media (max-width: 768px) {
        padding: 50px 10px; 
    }
`;

const WhyJoinModuleBackground = styled(ModuleBackground)`
    height: 150vh;
`;

const Title = styled.div`
    grid-column: 1/3;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 5px;
    font-size: 24px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
const Row = styled.div<{ columns: string }>`
    display: grid;
    grid-template-columns: ${(props) => props.columns || "1fr 1fr"};
    gap: 30px;
    width: 100%; 
    margin-bottom: 30px; 
    grid-column: 1 / 3;
`;

interface NoteWrapperProps {
    customHeight?: string;
    column?: string;
  }
  
 const NoteWrapper = styled.div<NoteWrapperProps>`
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${(props) => props.customHeight || 'auto'};
    grid-column: ${(props) => props.column || '1'}; 
`;

const ImageWrapper = styled.div`
    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${(props) => props.column};
`;

export {
    WhyJoinModuleContainer,
    WhyJoinModuleBackground,
    Title,
    Row,
    NoteWrapper,
    ImageWrapper
};
