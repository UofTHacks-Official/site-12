import { useState, useRef, useEffect } from 'react';
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
    const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);

    const updateCardSize = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            console.log(ref.current);
            const { offsetWidth, offsetHeight } = ref.current;
            console.log(offsetWidth, offsetHeight);
            setCardSize({ width: offsetWidth, height: offsetHeight });
        }
    }
    useEffect(() => {
        // set initial card size based on front content
        setCardSize({ width: 250, height: 160 })
    }, [frontContent])

    const handleCardClick = () => {
        console.log(frontRef.current);
        console.log(backRef.current);
        if (frontRef.current) {
            console.log('Front content size:', frontRef.current.clientWidth, frontRef.current.clientHeight);
        }
        if (backRef.current) {
            console.log('Back content size:', backRef.current.clientWidth, backRef.current.clientHeight);
        }
        if (!flipped && backRef.current) {
            // Get back content size before flipping
            setCardSize({ width: 4000, height: 4000 });
        }

        setFlipped(true);
        setTimeout(() => {
            onClick();
            // After the flip, reset back to front content size
            setCardSize({ width: 250, height: 160 })
            setFlipped(false);
        }, 600); // match this with the duration of the css transition
    };

    return (
        <CardContainer
            onClick={handleCardClick}
            style={{
                width: `${cardSize.width}px`,
                height: `${cardSize.height}px`,
                transition: 'width 0.6s, height 0.6s', // Smooth transition for size
            }}
        >
            <CardInner flipped={flipped}>
                <CardFace front ref={frontRef}>{frontContent}</CardFace>
                <CardFace ref={backRef}>{backContent}</CardFace>
            </CardInner>
        </CardContainer>
    );
};

export default FlipCard;