import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

const TipsBox = props => {
    const { title, date, image, content } = props
    return (
        <Box>
            <Box mb={3}>
                <Typography variant="h2">
                    { title }
                </Typography>
            </Box>
            <Box mb={1.5}>
                <Typography variant="body2">
                    { date }
                </Typography>
            </Box>
            <Box mb={1.5} px={0}>
                <img src={image} alt="tips image" height={190} width="100%"/>
            </Box>
            <Box textAlign="justify">
                <Typography variant="body2">
                    {content}
                </Typography>
            </Box>
        </Box>
    )
}

export default TipsBox

TipsBox.propTypes = {
    title:PropTypes.string,
    date:PropTypes.string,
    image:PropTypes.node,
    content:PropTypes.string
}
