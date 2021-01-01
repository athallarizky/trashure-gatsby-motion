import React from 'react'
import { Button, Box } from '@material-ui/core'
import { navigate } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBack from "@material-ui/icons/ArrowBack";

// import useStyles from './style'
const useStyles = makeStyles( theme => ({
    backButton:{
        padding:1.5,
        minWidth:0,
    }
}))

const goBack = () => navigate(-1)

const NavBackButton = () => {
    const classes = useStyles()
    return (
            <Button className={classes.backButton} onClick={goBack}>
                <ArrowBack />
            </Button>
    )
}


export default NavBackButton
