import styled, { css } from "styled-components";

export const CardContainer = styled.div<{
  hide: boolean;
  flipped: boolean;
  r: string;
  z: string;
  styles: string;
}>`
  perspective: 1000px;
  cursor: pointer;
  position: absolute;
  border-radius: 15px;
  ${({ styles }) => styles}
  z-index: ${({ z }) => z};
  transform: rotate(${({ r }) => r});
  opacity: 1;
  transition: margin-left 0.6s ease, margin-top 0.6s ease, transform 0.6s ease,
    width 0.6s ease, height 0.6s ease;
  box-shadow: 0 0 20px rgba(175, 246, 238, 0.7);

  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    /* Intensify the glow on hover */
    box-shadow: 0 0 40px rgba(175, 246, 238, 0.7);
  }
  ${({ flipped }) =>
    flipped &&
    css`
      margin-left: 0;
      margin-top: 0;
      transform: rotate(0deg);
      z-index: 50;
    `}
  ${({ hide }) =>
    hide &&
    css`
      margin-left: 0;
      margin-top: 0;
    `}
`;

export const CardInner = styled.div<{ flipped: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease, width 0.6s, height 0.6s;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const CardFace = styled.div<{ front?: boolean }>`
  position: absolute;
  backface-visibility: hidden;
  width: 100%; /* Ensures the face takes full width */
  height: 100%; /* Ensures the face takes full height */
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ front }) =>
    front
      ? css``
      : css`
          transform: rotateY(180deg);
        `}
`;
