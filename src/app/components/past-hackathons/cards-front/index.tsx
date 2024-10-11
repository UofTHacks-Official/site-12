import {
    StyledCard,
    StyledCardActionArea,
    StyledTypography,
    CardStripe,
} from './index.styles'

interface StyledCardProps {
    bgColour: string;
    borderColour: string;
    children?: React.ReactNode;
}

const CardFront: React.FC<StyledCardProps> = ({ bgColour, borderColour, children }) => {
    return (
        <StyledCard bgColour={bgColour}>
            <StyledCardActionArea>
                <CardStripe colour={borderColour}>
                    <StyledTypography>
                        {children}
                    </StyledTypography>
                </CardStripe>
            </StyledCardActionArea>
        </StyledCard>
    )
}

export default CardFront;