import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    root:{
        color:'#FFF'
    },
    balanceText:{
        textTransform:'uppercase'
    }
}))
const BalanceBox = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box width="100%" padding={1} display="flex" justifyContent="space-between" bgcolor="primary.dark" borderRadius="4px 4px 0px 0px">
                <Typography variant="h3" className={classes.balanceText}>
                    Dompet
                </Typography>
                <Typography variant="h3">
                    Rp.150.000
                </Typography>   
            </Box>
            <Box width="100%" padding={1} display="flex" justifyContent="space-between" minHeight="100px" bgcolor="primary.main" borderRadius="0px 0px 4px 4px">
                <Box minHeight="80%" display="flex" alignItems="center">
                    <Typography>
                        <strong style={{marginRight:4}}>Level :</strong>
                        Trashure Sejati
                    </Typography>

                </Box>
                <Box minWidth=".5px" minHeight="20vh" display="block" bgcolor="#FFF"/>
                <Box minHeight="80%" display="flex" alignItems="center">
                    <Typography>
                        <strong style={{marginRight:4}}>Trashbag :</strong>
                        Tidak Terhubung
                    </Typography>

                </Box>
            </Box>
        </Box>
    )
}

export default BalanceBox
