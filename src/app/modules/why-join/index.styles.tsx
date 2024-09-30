import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

interface MobileProps {
    isMobile?: boolean | null
}

export const ImageBackgroundContainer = styled(Box)<MobileProps>`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.isMobile ? 'white' : 'transparent')};
    background-image: ${(props) => (props.isMobile ? 'none' : "url('/background/why-join.svg')")};
    background-position: center center;
    background-repeat: no-repeat;
    padding: ${(props) => (props.isMobile ? '20px' : '40px')};
    background-size: ${(props) => (props.isMobile ? 'contain' : 'cover')};
    box-sizing: border-box;
`;

export const Title = styled(SpaceGrotesk)<MobileProps>`
    font-size: ${(props) => (props.isMobile ? '36px' : '50px')};
    color: white;
    text-align: center;
    margin-bottom: 40px;
`;

export const NoteWrapper = styled(Box)<{ customHeight?: string }>`
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    height: ${(props) => props.customHeight || "auto"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const ImageWrapper = styled(Box)<{ isMobile?: boolean | null }>`
    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: cover;

        ${({isMobile}) =>
                isMobile &&
                `
                  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Add drop shadow for mobile view */
                  border-radius: 8px; /* Optional, if you want to give rounded corners */
                `}
    }

    display: flex;
    align-items: center;
    justify-content: center;
`;