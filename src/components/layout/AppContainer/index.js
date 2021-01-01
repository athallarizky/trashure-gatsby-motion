import React from 'react'
import AppWrapper from 'components/layout/AppWrapper'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Box } from '@material-ui/core'

import useStyles from './style'

const AppContainer = (props) => {
    const classes = useStyles()
    const { children, noPadding } = props

    return (
        <AppWrapper>
            <Box className={classNames(classes.root, noPadding ? classes.noPadding : '')}>
                {children}
            </Box>
        </AppWrapper>
    )
}



export default AppContainer

AppContainer.propTypes = {
    noPadding: PropTypes.bool,

}
