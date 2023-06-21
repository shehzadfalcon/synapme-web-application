import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Styles from "@/styles/MUI/troubleshooting"


export default function FaqAccordion({ classes, item }: any) {
  return (
    <div className={`${classes}`}>
      <Accordion sx={Styles.faqAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={Styles.faqAccordionHead}
        >
          <Typography>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.summary}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}