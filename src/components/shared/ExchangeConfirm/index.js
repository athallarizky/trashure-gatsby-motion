import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import useStyles from "./style";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

const ExchangeConfirm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper className={classes.paperWrapper} elevation={0}>
        <Box className={classes.heading} display="flex" alignItems="center">
          <Box mr={2}>
            <PhoneIphoneIcon />
          </Box>
          <Box>
            <Typography variant="h3">Pulsa</Typography>
          </Box>
        </Box>
        {/* Separator */}
        <Box width="100%" border="1px solid #F8F8F8;" my={4} />
        <Box className={classes.content}>
          <Box className={classes.serviceName} mb={1.5}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography variant="body2">Jenis Layanan</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography variant="body2">XL Axiata</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.phoneNmber} mb={1.5}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography variant="body2">Nomor</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography variant="body2">081940506242</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.phoneCharge} mb={1.5}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography variant="body2">Pulsa</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography variant="body2">5.000</Typography>
              </Grid>
            </Grid>
          </Box>
          {/* Separator */}
          <Box width="100%" border="1px solid #F8F8F8;" my={4} />
          <Box className={classes.totalPrice} mb={1.5}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography variant="body2">Harga</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography variant="body2">6.000</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box position="absolute" bottom={25} left={25} right={25}>
            <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                disableElevation 
                fullWidth 
                style={{minHeight:56, color:'#FFF'}}
                >
                <Typography variant="body1">
                    Tukar
                </Typography>       
            </Button>

        </Box>
      </Paper>
    </Box>
  );
};

export default ExchangeConfirm;
