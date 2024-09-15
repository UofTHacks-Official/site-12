import styled from "styled-components";
import { ModuleBackground, ModuleContainer } from "@/app/components/shared/containers/index.styles";

const WhyJoinModuleContainer = styled(ModuleContainer)`
    height: 150vh;
    min-height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto auto; 
    gap: 24px;
    padding: 100px 290px 290px;
    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 50px 10px; 
    }
`;

const WhyJoinModuleBackground = styled(ModuleBackground)`
    height: 150vh;
`;

const Title = styled.div`
    grid-column: span 2; /* span title across both columns */
    text-align: center;
    margin-top: 70px;
    margin-bottom: 5px;
    font-size: 24px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const NoteWrapper = styled.div`
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${props => props.customHeight || 'auto'}; 
    grid-column: ${props => props.column};
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
    grid-column: ${props => props.column};
`;

export {
    WhyJoinModuleContainer,
    WhyJoinModuleBackground,
    Title,
    NoteWrapper,
    ImageWrapper
};
