import React from "react";
import { navigate } from 'gatsby'
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SuccessIcon from "assets/images/success-icon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    //
  },
}));

const ExchangeSuccess = () => {
  const classes = useStyles();
  const handleClick = () => navigate('/')
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box mb={2}>
        <img src={SuccessIcon} alt="success-icon" width={84} height={84} />
      </Box>
      <Box mb={2}>
        <Typography variant="h3">Berhasil</Typography>
      </Box>
      <Box textAlign="center" mb={1.5}>
        <Typography variant="body2">
          Terima kasih telah melakukan penukaran saldo
        </Typography>
      </Box>
      <Box textAlign="center" mb={4}>
        <Typography variant="body2">Sisa saldo anda Rp. 144.000</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        disableElevation
        fullWidth
        style={{ minHeight: 56, color: "#FFF" }}
        onClick={handleClick}
      >
        <Typography variant="body1">Kembali</Typography>
      </Button>
    </Box>
  );
};

export default ExchangeSuccess;
