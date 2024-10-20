import { useState, useRef, useEffect } from "react";
import { CardContainer, CardInner, CardFace } from "./index.styles";

interface FlipCardProps {
  flippedStates: boolean[];
  onClick: () => void;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  mLeft: string;
  mTop: string;
  z: string;
  r: string;
  id: number;
}

const FlipCard: React.FC<FlipCardProps> = ({
  onClick,
  frontContent,
  backContent,
  mLeft,
  mTop,
  z,
  r,
  id,
  flippedStates,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [cardSize, setCardSize] = useState({ width: "300px", height: "185" });
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const hideRef = useRef(false);

  useEffect(() => {
    // set initial card size based on front content
    //setCardSize({ width: "300px", height: "185" });
  }, [frontContent]);

  useEffect(() => {
    hideRef.current = flippedStates.some((state) => state);
    setFlipped(flippedStates[id]);
    if (!flipped && backRef.current) {
      setCardSize({ width: "100%", height: "4000" });
    }

    if (!flippedStates[id]) {
      setCardSize({ width: "300px", height: "185" });
      setFlipped(false);
    } else {
      setTimeout(() => {
        setCardSize({ width: "300px", height: "185" });
        setFlipped(false);
      }, 600);
    }
  }, [flippedStates, id, flipped]);

  const handleCardClick = () => {
    onClick();
  };

  return (
    <CardContainer
      hide={hideRef.current}
      onClick={handleCardClick}
      style={{
        width: `${cardSize.width}`,
        height: `${cardSize.height}px`,
      }}
      flipped={flipped}
      marginLeft={mLeft}
      marginTop={mTop}
      z={z}
      r={r}
    >
      <CardInner flipped={flipped}>
        <CardFace front ref={frontRef}>
          {frontContent}
        </CardFace>
        <CardFace ref={backRef}>{backContent}</CardFace>
      </CardInner>
    </CardContainer>
  );
};

export default FlipCard;
