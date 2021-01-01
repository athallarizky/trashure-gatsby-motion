import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline, Box } from '@material-ui/core'

import MuiTheme from '../theme'

const BaseLayout = ({children}) => {
    return (
        <ThemeProvider theme={MuiTheme}>
            <CssBaseline/>
            <Box bgcolor="#E5E5E5">
                { children }
            </Box>
        </ThemeProvider>
    )
}

export default BaseLayout
