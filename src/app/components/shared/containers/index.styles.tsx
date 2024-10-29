import styled from "styled-components";
import Image from 'next/image'

const ModuleContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: 0;
`;

const ModuleBackground = styled(Image)`
    top: 0;
    left: 0;
    width: 100%;
    min-width: 350px;
    height: 100vh;
    z-index: -1;
    position: absolute;
`;

export {ModuleContainer, ModuleBackground};
