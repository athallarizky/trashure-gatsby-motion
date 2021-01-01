import React from "react";
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary, TextField } from "@material-ui/core";
import MobileChargeForm from 'components/shared/MobileChargeForm'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

import DanaIcon from 'assets/images/dana-icon.svg'
import LinkAjaIcon from 'assets/images/linkaja-icon.svg'

import useStyles from "./style";

const ExchangeAccordion = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box className={classes.root}>
      <Accordion
      elevation={0}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.accordionWrapper}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><PhoneIphoneIcon/></Typography>
          <Typography className={classes.secondaryHeading}>
            Pulsa
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <MobileChargeForm/>
            {/* <Box className={classes.formWrapper} width="100%">
                <TextField id="phone-number" label="Nomor HP" fullWidth />
            </Box>   */}
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={classes.accordionWrapper}

      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
              <img src={DanaIcon} widht="37px"/>
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Dana
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - Under Construction - 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={classes.accordionWrapper}

      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
              <img src={LinkAjaIcon} widht="37px"/>
          </Typography>
          <Typography className={classes.secondaryHeading}>
            LinkAja
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - Under Construction - 
          </Typography>
        </AccordionDetails>
      </Accordion>


      
      
    </Box>
  );
};

export default ExchangeAccordion;
