import React from 'react'
import { Box } from '@material-ui/core'

import useStyles from './style'

const AppWrapper = ({children}) => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            {children}
        </Box>
    )
}

export default AppWrapper
