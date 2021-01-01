import React from 'react'
import { Link } from 'gatsby'
import { Box, Typography, Button } from "@material-ui/core";
import { useLocation } from '@reach/router'
import GplusIcon from 'assets/images/gplus-icon.svg'
import FacebookIcon from 'assets/images/facebook-icon.svg'
import useStyles from "./style";

const LoginOAuth = () => {
    const classes = useStyles();

    // console.log('Location', useLocation())
    const currentRoute = useLocation().pathname
    let placeholder = currentRoute === '/register' ? 
        { overline:'daftar', caption:'Sudah', routeText:'Masuk', href:'/login' } : 
        { overline:'login', caption:'Belum', routeText:'Daftar', href:'/register'} 
    return (
        <Box className={classes.root} py={3} display="flex" flexDirection="column" alignItems="center" minHeight="25vh">
            <Box mb={3}>
                <Typography variant="body2" className={classes.caption}>
                    atau {placeholder.overline} dengan
                </Typography>
            </Box>

            <Box mb={3} width="100%" display="flex" justifyContent="center">
                <Box mx={1}>
                    <Button variant="contained" className={classes.oauthButton} disableElevation>
                        <img src={GplusIcon} alt="gplus-icon" width={36}/>
                    </Button>

                </Box>
                <Box mx={1}>
                    <Button variant="contained" className={classes.oauthButton} disableElevation>
                        <img src={FacebookIcon} alt="facebook-icon" width={26}/>
                    </Button>
                </Box>
            </Box>

            <Box>
                <Typography variant="body2">
                    { placeholder.caption } punya akun Trashure? <span> <Link to={placeholder.href}> {placeholder.routeText} </Link></span>
                </Typography>
            </Box>
        </Box>
    )
}

export default LoginOAuth
