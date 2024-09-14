import {Accordion as MuiAccordion, styled} from "@mui/material";

const MuiAccordionStyled = styled(MuiAccordion)(({}) => ({
    "&:before": {
        display: "none",
    },
    "&.MuiPaper-root": {
        borderRadius: "0.5rem",
    },
    "&.Mui-expanded": {
        margin: 0,
    },
}));

export {MuiAccordionStyled}