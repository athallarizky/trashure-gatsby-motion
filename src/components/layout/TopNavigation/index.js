import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// import { AppBar, Toolbar, Slide, useScrollTrigger } from "@material-ui/core";

import { AppBar, Toolbar } from '@material-ui/core'

import useStyles from './style'

const TopNavigation = (props) => {
    const classes = useStyles()
    const { 
        children,
        withIcon,
        whiteBg
    } = props
    return (
        <AppBar className={classNames(classes.root, whiteBg?classes.whiteBg:'')} color="transparent">
            <Toolbar className={classNames(classes.navToolbar, withIcon?classes.withIcon:'')}>
                {children}
            </Toolbar>
        </AppBar>
    )
}

export default TopNavigation

TopNavigation.propTypes = {
    whiteBg: PropTypes.bool,
    withIcon:PropTypes.bool
}
