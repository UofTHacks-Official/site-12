import React, {ReactNode} from "react";
import styled, {css} from "styled-components";
import {useMobileDetect} from "../../../../hooks/useMobileDetect";

// EXAMPLE USAGE:
//     <Manrope fontWeight={ManropeFontWeight.Bold} style={{ ...fontSize, marginBottom: "5%" }}>
//         UofTHacks 12
//     </Manrope>

export enum ManropeFontWeight {
    ExtraLight = "ExtraLight",
    Light = "Light",
    Regular = "Regular",
    Medium = "Medium",
    SemiBold = "SemiBold",
    Bold = "Bold",
    ExtraBold = "ExtraBold",
}

type StyledManropeTextProps = {
    style?: any;
    $mobile?: boolean | null;
    fontWeight?: ManropeFontWeight;
};

const getFontSrc = (fontWeight: ManropeFontWeight) => {
    switch (fontWeight) {
        case ManropeFontWeight.ExtraLight:
            return "/fonts/Manrope-ExtraLight.woff2";
        case ManropeFontWeight.Light:
            return "/fonts/Manrope-Light.woff2";
        case ManropeFontWeight.Regular:
            return "/fonts/Manrope-Regular.woff2";
        case ManropeFontWeight.Medium:
            return "/fonts/Manrope-Medium.woff2";
        case ManropeFontWeight.SemiBold:
            return "/fonts/Manrope-SemiBold.woff2";
        case ManropeFontWeight.Bold:
            return "/fonts/Manrope-Bold.woff2";
        case ManropeFontWeight.ExtraBold:
            return "/fonts/Manrope-ExtraBold.woff2";
        default:
            return "/fonts/Manrope-Regular.woff2";
    }
};

const createManropeFont = (fontWeight: ManropeFontWeight) => css`
    @font-face {
        font-family: "Manrope-${fontWeight}";
        src: url(${getFontSrc(fontWeight)}) format("woff2");
        font-weight: normal;
        font-style: normal;
    }
`;

const StyledManropeText = styled.p<StyledManropeTextProps>`
    ${(props) => createManropeFont(props.fontWeight || ManropeFontWeight.Regular)};
    font-family: ${(props) => (`Manrope-${props.fontWeight || ManropeFontWeight.Regular}`)};
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-size: ${(props) => (props.$mobile ? "48px" : "96px")};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0rem;
    color: var(--Brand-Primary-300, #225C90);
`;

type SubjectivityProps = StyledManropeTextProps & {
    children: ReactNode;
};

const Manrope: React.FC<SubjectivityProps> = ({
                                                  children,
                                                  style,
                                                  fontWeight = ManropeFontWeight.Regular,
                                                  ...props
                                              }) => {
    const $ismobile = useMobileDetect();
    return (
        <StyledManropeText
            style={style}
            $mobile={$ismobile}
            fontWeight={fontWeight}
            {...props}
        >
            {children}
        </StyledManropeText>
    );
};

export default Manrope;
