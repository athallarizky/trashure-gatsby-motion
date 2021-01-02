import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Box, Typography, Card, CardMedia, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TrashPlastic from 'assets/images/trash-plastic.png'
const useStyles = makeStyles( theme => ({
    root:{
        textDecoration:'none',
    },
    cardWrapper:{
        borderRadius:4,
        marginBottom:15,
        boxShadow:'0px 4px 12px rgba(81, 81, 81, 0.02)'
    },
    cardMedia:{
        width:'100%',
        height:160,
    }
}))
const PriceCard = props => {
    const classes = useStyles()
    const { title, price, unit, photo, href} = props
    return (
        <Link to={href} className={classes.root}>
            <Card className={classes.cardWrapper} elevation={0}>
                <CardMedia
                    image={photo}
                    titile="Price Image"
                    className={classes.cardMedia}
                />
                <CardContent>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body2">
                            <strong>
                                { title }
                            </strong>
                        </Typography>
                        <Typography variant="body2">
                            <Box color="secondary.main">
                                <strong>
                                    Rp. { price }/ {unit}
                                </strong>
                            </Box>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    )
}

export default PriceCard

PriceCard.propType = {
    title:PropTypes.string,
    price:PropTypes.string,
    unit:PropTypes.string,
    photo:PropTypes.string,
    href:PropTypes.string
}