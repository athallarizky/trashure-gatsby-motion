import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    root:{

    }
}))

const NavCaption = (props) => {
    const { caption } = props
    return (
        <Box {...props}>
            <Typography variant="h2">
                {caption}
            </Typography>
        </Box>
    )
}

export default NavCaption


NavCaption.propTypes = {
    caption: PropTypes.string.isRequired,
}