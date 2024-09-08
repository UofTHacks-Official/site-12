import * as React from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordionStyled = styled(MuiAccordion)(({}) => ({
  "&:before": {
    display: "none",
  },
  "&.MuiPaper-root": {
    border: "1px solid #E0E0E0",
    borderRadius: "0.5rem",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
}));

interface AccordionProps {
  title: string;
  content?: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  return (
    <MuiAccordionStyled elevation={0} disableGutters>
      <AccordionSummary
        aria-controls={`${title}-panel`}
        id={`${title}-header`}
        expandIcon={<ExpandMoreIcon />}
      >
        <strong>{title}</strong>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </MuiAccordionStyled>
  );
};

export default Accordion;
