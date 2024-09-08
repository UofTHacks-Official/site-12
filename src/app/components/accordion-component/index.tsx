import * as React from "react";
import {
    AccordionDetails,
    AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {MuiAccordionStyled} from "@/app/components/accordion-component/index.styles";
import Manrope from "@/app/components/shared/fonts/manrope";

interface AccordionProps {
    title: string;
    content?: string;
}

const AccordianComponent = ({title, content}: AccordionProps) => {

    const manRopeTitleStyles = {
        color: "#191A1B",
        fontSize: 20,
        letterSpacing: "0.0rem",
    }

    const manRopeContentStyles = {
        color: "#191A1B",
        fontSize: 12,
        textAlign: "left",
        marginLeft: "15px",
        letterSpacing: "0.0rem",
    }

    return (
        <MuiAccordionStyled elevation={0} disableGutters>
            <AccordionSummary
                aria-controls={`${title}-panel`}
                id={`${title}-header`}
                expandIcon={<ExpandMoreIcon/>}
            >
                <Manrope style={manRopeTitleStyles}>{title}</Manrope>
            </AccordionSummary>
            <AccordionDetails>
                <Manrope style={manRopeContentStyles}>
                    {content}
                </Manrope>
            </AccordionDetails>
        </MuiAccordionStyled>
    );
};

export default AccordianComponent;
