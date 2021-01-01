import React from "react";
import { Link } from "gatsby";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

import useStyles from "./style";

import UserIcon from "assets/images/user-icon.svg";
import EmailIcon from "assets/images/email-icon.svg";
import PhoneIcon from "assets/images/phone-icon.svg";
import LockIcon from "assets/images/lock-icon.svg";

const RegisterForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} pt="100px">
      <Box className={classes.formArea}>
        <Box my={3}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={UserIcon} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box my={3}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={EmailIcon} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box my={3}>
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={PhoneIcon} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box my={3}>
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={LockIcon} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        disableElevation
        fullWidth
        style={{ minHeight: 56, color: "#FFF" }}
      >
        <Typography variant="body1">Daftar</Typography>
      </Button>
    </Box>
  );
};

export default RegisterForm;
