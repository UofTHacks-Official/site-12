import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  perspective: 1000px;
  cursor: pointer;
  border: 1px solid black;
`;

export const CardInner = styled.div<{ flipped: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s, width 0.6s, height 0.6s;
  transform-style: preserve-3d;
  border: 1px solid red;
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
  border: 1px solid green;
  display: flex;
    justify-content: center;
    align-items: center;

  ${({ front }) =>
        front
            ? css`
                
        `
            : css`
                transform: rotateY(180deg);
        `}
`;