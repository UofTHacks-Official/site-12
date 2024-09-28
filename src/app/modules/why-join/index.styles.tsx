import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

export const ImageBackgroundContainer = styled(Box)`
    width: 100%;
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/background/why-join.svg');
    background-position: center center;
    background-repeat: no-repeat;
    padding: 40px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 20px;
        background-size: contain;
    }
`;

export const Title = styled(SpaceGrotesk)`
    font-size: 50px;
    color: white;
    text-align: center;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 36px;
    }
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

export const ImageWrapper = styled(Box)`
    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }

    display: flex;
    align-items: center;
    justify-content: center;
`;