import * as React from "react";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MuiAccordionStyled } from "@/app/components/accordion-component/index.styles";
import Manrope from "@/app/components/shared/fonts/manrope";

interface AccordionProps {
  title: string;
  content?: string;
}

const AccordianComponent = ({ title, content }: AccordionProps) => {
  const manRopeTitleStyles = {
    color: "#191A1B",
    fontSize: "1.25rem",
    letterSpacing: "0.0rem",
    fontWeight: 600,
    textAlign: "left",
  };

  const manRopeContentStyles = {
    color: "#191A1B",
    fontSize: 16,
    textAlign: "left",
    padding: "0 1.5rem",
    letterSpacing: "0.0rem",
    fontWeight: 400,
  };

  return (
    <MuiAccordionStyled elevation={0} disableGutters>
      <AccordionSummary
        aria-controls={`${title}-panel`}
        id={`${title}-header`}
        expandIcon={<ExpandMoreIcon sx={{ color: "#225C90" }} />}
      >
        <Manrope style={manRopeTitleStyles}>{title}</Manrope>
      </AccordionSummary>
      <AccordionDetails>
        <div
          style={manRopeContentStyles as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: content || "" }}
        />
      </AccordionDetails>
    </MuiAccordionStyled>
  );
};

export default AccordianComponent;
