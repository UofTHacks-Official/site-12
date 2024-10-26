import React, {ReactNode} from "react";
import styled, {css} from "styled-components";
import {useMobileDetect} from "../../../../hooks/useMobileDetect";

// EXAMPLE USAGE:
//     <SpaceGrotesk fontWeight={SpaceGroteskFontWeight.Bold} style={{ ...fontSize, marginBottom: "5%" }}>
//         UofTHacks 12
//     </SpaceGrotesk>

export enum SpaceGroteskFontWeight {
    Light = "Light",
    Regular = "Regular",
    Medium = "Medium",
    SemiBold = "SemiBold",
    Bold = "Bold",
}

type StyledSpaceGroteskTextProps = {
    style?: any;
    $mobile?: boolean | null;
    fontWeight?: SpaceGroteskFontWeight;
};

const getFontSrc = (fontWeight: SpaceGroteskFontWeight) => {
    switch (fontWeight) {
        case SpaceGroteskFontWeight.Light:
            return "/fonts/SpaceGrotesk-Light.woff2";
        case SpaceGroteskFontWeight.Regular:
            return "/fonts/SpaceGrotesk-Regular.woff2";
        case SpaceGroteskFontWeight.Medium:
            return "/fonts/SpaceGrotesk-Medium.woff2";
        case SpaceGroteskFontWeight.SemiBold:
            return "/fonts/SpaceGrotesk-SemiBold.woff2";
        case SpaceGroteskFontWeight.Bold:
            return "/fonts/SpaceGrotesk-Bold.woff2";
        default:
            return "/fonts/SpaceGrotesk-Regular.woff2";
    }
};

const createSpaceGroteskFont = (fontWeight: SpaceGroteskFontWeight) => css`
    @font-face {
        font-family: "SpaceGrotesk-${fontWeight}";
        src: url(${getFontSrc(fontWeight)}) format("woff2");
        font-weight: normal;
        font-style: normal;
    }
`;

const StyledSpaceGroteskText = styled.p<StyledSpaceGroteskTextProps>`
    ${(props) =>
            createSpaceGroteskFont(props.fontWeight || SpaceGroteskFontWeight.Regular)};
    font-family: ${(props) =>
            `SpaceGrotesk-${props.fontWeight || SpaceGroteskFontWeight.Regular}`};
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-size: ${(props) => (props.$mobile ? "48px" : "96px")};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3rem;
    color: var(--Brand-Primary-300, #225c90);
`;

type SubjectivityProps = StyledSpaceGroteskTextProps & {
    children: ReactNode;
};


const SpaceGrotesk: React.FC<SubjectivityProps> = ({
                                                       children,
                                                       style,
                                                       fontWeight = SpaceGroteskFontWeight.Regular,
                                                       ...props
                                                   }) => {
    const $ismobile = useMobileDetect();
    return (
        <StyledSpaceGroteskText
            style={style}
            $mobile={$ismobile}
            fontWeight={fontWeight}
            {...props}
        >
            {children}
        </StyledSpaceGroteskText>
    );
};

interface SpaceGroteskSectionTitleProps {
    isMobile?: boolean | null

}

export const SpaceGroteskSectionTitle = styled(SpaceGrotesk)<SpaceGroteskSectionTitleProps>`
    text-align: ${({ isMobile }) => (isMobile ? 'center' : `start`)};
    font-size: ${({ isMobile }) => (isMobile ? '2rem' : '3.75rem')};
    letter-spacing: 0rem;
`;

export default SpaceGrotesk;
