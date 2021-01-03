import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Box, Typography, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles( theme => ({
    root:{
        textDecoration:'none',
    },
    paperWrapper:{
        backgroundColor:'#FFF',
        borderRadius:0,
    },
    settingIcon:{
        width:50,
        height:24,
    },
    settingTitle:{
        padding:'30px 0',
        fontSize:18,
    },
    isLast:{
        borderBottom:'2px solid #33333310'
    }
}))
const SettingCard = props => {
    const classes = useStyles()

    const { title, icon, href, isLast } = props
    return (
        <Link to={href} className={classes.root}>
            <Paper className={classes.paperWrapper} elevation={0}>
                <Box display="flex" alignItems="center">
                    <Box className={classes.settingIcon} px={1.5} ml={2} mr={3}>
                        { icon }
                    </Box>
                    <Box  width="100%">
                        <Typography variant="body2" className={classNames(classes.settingTitle, isLast?classes.isLast:'')}>
                            { title }
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Link>
    )
}

export default SettingCard

SettingCard.propType = {
    icon:PropTypes.node,
    title:PropTypes.string,
    isLast:PropTypes.bool,
    href:PropTypes.string,
}