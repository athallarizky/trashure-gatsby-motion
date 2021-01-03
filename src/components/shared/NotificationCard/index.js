import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root:{
        textDecoration:'none',
        color:'#000'
    },
    paperWrapper:{
        padding:'8px 15px',
    },
    notifOverview:{
        fontSize:12,
    }
}))
const NotificationCard = props => {
    const classes = useStyles()
    const { icon, title, message, date, href } = props
    return (
        <Link to={href} className={classes.root}>
            <Box className={classes.paperWrapper} elevation={0}>
                <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="center" minWidth="15%" maxWidth="15%" mr={1}>
                        <img src={icon} />
                    </Box>  
                    <Box display="flex" alignItems="center" justifyContent="space-between" py={1.5} minWidth="85%" maxWidth="85%" borderBottom="2px solid #33333310">
                        <Box display="flex" flexDirection="column">
                            <Typography variant="body2">
                                <strong>{title}</strong>
                            </Typography>
                            <Typography variant="body2" className={classes.notifOverview}>
                                {message}
                            </Typography>
                        </Box>
                        <Box px={2}>
                            <Typography variant="body2">
                                {date}
                            </Typography>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default NotificationCard


NotificationCard.propType = {
    icon:PropTypes.node,
    title:PropTypes.string,
    message:PropTypes.string,
    date:PropTypes.string,
    href:PropTypes.string
}
