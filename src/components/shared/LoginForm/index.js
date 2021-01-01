import React from "react";
import { Link } from 'gatsby'
import { Box, Typography, TextField, InputAdornment, FormControlLabel, Checkbox, Button } from "@material-ui/core";

import useStyles from "./style";

import EmailIcon from "assets/images/email-icon.svg";
import LockIcon from "assets/images/lock-icon.svg";

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        <Box className={classes.formArea}>
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
        <Box className={classes.loginPlaceholder} display="flex" justifyContent="space-between" alignItems="center" mb={5}>
            <Box className={classes.rememberMe}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="rememberMe"
                            color="primary"
                        />
                    }
                    label="Ingat Saya"
                />
            </Box>
            <Box className={classes.forgotPassword}>
                <Box>
                    <Typography variant="body1">
                        <Link to="/" style={{textDecoration:'none', textTransform:'uppercase'}}>
                            Lupa Password ?
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Button variant="contained" color="primary" size="large" disableElevation fullWidth style={{minHeight:56, color:'#FFF'}}>
            <Typography variant="body1">
                Masuk
            </Typography>       
        </Button>

    </Box>
  );
};

export default LoginForm;
