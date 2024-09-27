import { useState } from 'react';
import {
    CardContainer,
    CardInner,
    CardFace,
} from './index.styles';

interface FlipCardProps {
    onClick: () => void;
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ onClick, frontContent, backContent }) => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(true);
        setTimeout(() => {
            onClick();
            setFlipped(false);
        }, 600); // match this with the duration of the css transition
    };

    return (
        <CardContainer onClick={handleCardClick}>
            <CardInner flipped={flipped}>
                <CardFace front>{frontContent}</CardFace>
                <CardFace>{backContent}</CardFace>
            </CardInner>
        </CardContainer>
    );
};

export default FlipCard;