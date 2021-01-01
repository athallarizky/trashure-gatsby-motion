import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// import { AppBar, Toolbar, Slide, useScrollTrigger } from "@material-ui/core";

import { Box, Typography, AppBar, Toolbar, Slide, useScrollTrigger } from '@material-ui/core'

import useStyles from './style'

const TopNavigation = (props) => {
    const classes = useStyles()
    const { 
        children,
        withCaption,
        withIcon,
        withBackButton,
        whiteBg
    } = props
    return (
        <AppBar className={classNames(classes.root, whiteBg?classes.whiteBg:'')} color="transparent">
            <Toolbar className={classes.navToolbar}>
                {children}
            </Toolbar>
        </AppBar>
    )
}

export default TopNavigation

TopNavigation.propTypes = {
    whiteBg: PropTypes.bool,
}
