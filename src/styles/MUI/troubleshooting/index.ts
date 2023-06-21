import { createTheme } from '@mui/material';
const theme = createTheme();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    faqAccordion:{
        borderRadius: "24px !important",
        boxShadow: "0px 10px 13px rgba(17, 38, 146, 0.05) !important"
    },
    faqAccordionHead: {
        py: "24px",
        "& .MuiAccordionSummary-content":{
            m: "0 !important"
        }
    }
};
