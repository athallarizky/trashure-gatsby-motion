import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    root:{

    },
    withBackButton:{
        marginLeft:20,
    }
}))

const NavCaption = (props) => {
    const classes = useStyles()
    const { caption, withBackButton } = props
    return (
        <Box {...props} className={classNames(withBackButton ? classes.withBackButton:'')}>
            <Typography variant="h2">
                {caption}
            </Typography>
        </Box>
    )
}

export default NavCaption


NavCaption.propTypes = {
    caption: PropTypes.string.isRequired,
    withBackButton: PropTypes.bool,
}