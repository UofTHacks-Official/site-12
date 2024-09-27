import {
    StyledCard,
    StyledCardActionArea,
    StyledTypography,
    CardStripe,
} from './index.styles'

interface StyledCardProps {
    bgColour: string;
    children?: React.ReactNode;
}

const CardFront: React.FC<StyledCardProps> = ({ bgColour, children }) => {
    return (
        <StyledCard bgColour={bgColour}>
            <StyledCardActionArea>
                <CardStripe>
                    <StyledTypography>
                        {children}
                    </StyledTypography>
                </CardStripe>
            </StyledCardActionArea>
        </StyledCard>
    )
}

export default CardFront;