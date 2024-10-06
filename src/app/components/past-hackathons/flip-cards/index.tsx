import { useState, useRef, useEffect } from "react";
import { CardContainer, CardInner, CardFace } from "./index.styles";

interface FlipCardProps {
  onClick: () => void;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  mLeft: string;
  mTop: string;
  z: string;
  r: string;
  hide: boolean;
}

const FlipCard: React.FC<FlipCardProps> = ({
  onClick,
  frontContent,
  backContent,
  mLeft,
  mTop,
  z,
  r,
  hide,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [cardSize, setCardSize] = useState({ width: "0", height: "0" });
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  // const updateCardSize = (ref: React.RefObject<HTMLDivElement>) => {
  //     if (ref.current) {
  //         console.log(ref.current);
  //         const { offsetWidth, offsetHeight } = ref.current;
  //         console.log(offsetWidth, offsetHeight);
  //         setCardSize({ width: offsetWidth, height: offsetHeight });
  //     }
  // }
  useEffect(() => {
    // set initial card size based on front content
    setCardSize({ width: "300px", height: "185" });
  }, [frontContent]);

  const handleCardClick = () => {
    if (!flipped && backRef.current) {
      // Get back content size before flipping
      setCardSize({ width: "100%", height: "4000" });
    }

    setFlipped(true);
    setTimeout(() => {
      onClick();
      // After the flip, reset back to front content size
      setCardSize({ width: "300px", height: "185" });
      setFlipped(false);
    }, 600); // match this with the duration of the css transition
  };

  return (
    <CardContainer
      hide={hide}
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
