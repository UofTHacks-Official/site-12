import styled, { css } from 'styled-components'
import { Card } from '@mui/material'

export const CardContainer = styled.div`
  perspective: 1000px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid black;
`;

export const CardInner = styled.div<{ flipped: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
    justify-content: center;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border: 1px solid red;

  ${({ flipped }) =>
        flipped &&
        css`
            transform: rotateY(180deg);
    `}
`;

export const CardFace = styled.div<{ front?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  ${({ front }) =>
        front
            ? css`
                
        `
            : css`
                transform: rotateY(180deg);
                background-colour: #000000;
        `}
`;