import styled from "styled-components";
import { ModuleBackground, ModuleContainer } from "@/app/components/shared/containers/index.styles";

const AboutUsModuleContainer = styled(ModuleContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    position: relative;
    margin: 0 auto;
`;

const AboutUsModuleBackground = styled(ModuleBackground)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-position: center;
`;

const LeftContainer = styled.div`
    max-width: 50vw;
    padding-right: 3vw;
    padding-left: 2vw;

    h1 {
        letter-spacing: 0px;
        font-size: 60px;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: #fff;
        text-align: left;
        line-height: 60px;
        font-style: normal;
    }
`;

const AboutUsDescription = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    font-size: 16px;
    text-align: left;
    letter-spacing: 0px;
`;

const ImagesContainer = styled.div`
    align-items: center;

    img {
        border: 10px solid #fff;
        border-radius: 4px;
        object-fit: cover;
    }

`;

export {
    AboutUsModuleContainer,
    AboutUsModuleBackground,
    LeftContainer,
    AboutUsDescription,
    ImagesContainer
};
