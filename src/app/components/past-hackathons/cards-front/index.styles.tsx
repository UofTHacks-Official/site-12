import styled from 'styled-components'
import { Card, CardActionArea, Typography } from '@mui/material'

interface StyledCardProps {
    bgColour: string;
    children?: React.ReactNode;
}

export const StyledCard: React.FC<StyledCardProps> = styled(Card) <StyledCardProps>`
    background: ${(props) => props.bgColour} !important;
    border-radius: 15px !important; 
    width: 300px;
    height: 185px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`

export const StyledCardActionArea = styled(CardActionArea)`
    width: 100%;
    height: 100%;
    border-radius: 15px !important;
    padding: 10px !important;
    .MuiTouchRipple-root {
        color: #ffffff; // Change the ripple color through props
    }
`

export const StyledTypography = styled(Typography)`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const CardStripe = styled.div`
    border-radius: 10px;
    height: 100%;
    width: 100%;
    border: 2px solid #BD90D8; // TODO change to variable
`