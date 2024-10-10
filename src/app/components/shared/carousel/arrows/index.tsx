// components/shared/carousel/arrows.tsx

import React from "react";
import styled from "styled-components";
import Image from "next/image";


const nextArrowIcon = "/assets/icons/next-arrow.svg"
const prevArrowIcon = "/assets/icons/prev-arrow.svg"

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1;
  &:hover {
    opacity: 1;
  }
`;

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
    return (
        <Arrow
            className={className}
            style={{ ...style, left: -20 }}
            onClick={onClick}
        >
            <Image src={prevArrowIcon} alt="Previous" width={40} height={40} />
        </Arrow>
    );
};

const NextArrow = ({ className, style, onClick }: ArrowProps) => {
    return (
        <Arrow
            className={className}
            style={{ ...style, right: -20 }}
            onClick={onClick}
        >
            <Image src={nextArrowIcon} alt="Next" width={40} height={40} />
        </Arrow>
    );
};

export { PrevArrow, NextArrow };
