import React from 'react'
import { navigate } from 'gatsby'
import { Box, Typography, Card, CardContent, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';
import ProfilePhoto from 'assets/images/profile-photo.png'
import TrashIcon from 'assets/images/trash-icon.svg'
import CrownIcon from 'assets/images/crown-icon.svg'
import CreditCardIcon from 'assets/images/credit-card-icon.svg'

const useStyles = makeStyles( theme => ({
    root:{
        minHeight:200,
        paddingTop:50,
    },
    profilephoto:{
        width:80,
        height:80,
        borderRadius:50,
        border:'3px solid #FFF',
        left:'50%',
        marginLeft:'-40px',
    },
    cardWrapper:{
        paddingTop:30,
        boxShadow:'0px 4px 12px rgba(81, 81, 81, 0.05)'
    },
    buttonEditProfile:{
        minWidth:0,
        color:'#33333340'
    },
    editIcon:{
        width:'15px'
    },
    placeholder:{
        fontSize:12,
        opacity:.34,
        marginBottom:2,
    }
}))
const AccountCard = () => {
    const classes = useStyles()
    const handleEditProfile = () => navigate('/account-edit')
    return (
        <Box className={classes.root} position="relative" width="100%">
            <Box position="absolute" className={classes.profilephoto} style={{backgroundImage:`url('${ProfilePhoto}')`, backgroundSize:'contain'}}/>
            <Box mt={5}>
                <Card className={classes.cardWrapper} elevation={0}>
                    <CardContent>
                        <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
                            <Box mr={1} ml={4.5}>
                                <Typography variant="h6">
                                    Muhammad Rafif
                                </Typography>
                            </Box>
                            <Button className={classes.buttonEditProfile} onClick={handleEditProfile}>
                                <EditIcon className={classes.editIcon}/>
                            </Button>
                        </Box>
                        <Box mb={3} width="100%" display="flex" justifyContent="space-between" bgcolor="#33333310" borderRadius={20} padding={2}>
                            <Box width="30%">
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <Box mb={1}>
                                        <img src={CrownIcon} width={36} height={36} />
                                    </Box>
                                    <Box mb={2}>
                                        <Typography variant="body2">
                                            Level
                                        </Typography>
                                    </Box>
                                    <Box textAlign="center">
                                        <Typography variant="body2">
                                            <strong>Trashure Sejati</strong>    
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box width="30%">
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <Box mb={1}>
                                        <img src={CreditCardIcon} width={36} height={36} />
                                    </Box>
                                    <Box mb={2}>
                                        <Typography variant="body2">
                                            Saldo
                                        </Typography>
                                    </Box>
                                    <Box textAlign="center">
                                        <Typography variant="body2">
                                            <strong>Rp. 150.000</strong>    
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box width="30%">
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <Box mb={1}>
                                        <img src={TrashIcon} width={36} height={36} />
                                    </Box>
                                    <Box mb={2}>
                                        <Typography variant="body2">
                                            Total
                                        </Typography>
                                    </Box>
                                    <Box textAlign="center">
                                        <Typography variant="body2">
                                            <strong>24kg</strong>    
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box mb={5}>
                            <Box mb={1.5}>
                                <Typography variant="body2" className={classes.placeholder}>
                                    Nomor HP
                                </Typography>
                                <Typography variant="body2">
                                    081974744262
                                </Typography>
                            </Box>
                            <Box mb={1.5}>
                                <Typography variant="body2" className={classes.placeholder}>
                                    Email
                                </Typography>
                                <Typography variant="body2">
                                    rafifsky@student.telkomuniversity.ac.id
                                </Typography>
                            </Box>
                            <Box mb={1.5}>
                                <Typography variant="body2" className={classes.placeholder}>
                                    Tanggal Lhir
                                </Typography>
                                <Typography variant="body2">
                                    07 - Juli - 2000
                                </Typography>
                            </Box>
                        </Box>

                        <Box px={1}>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                size="large" 
                                disableElevation 
                                fullWidth 
                                style={{minHeight:56, color:'#FFF'}}
                                // onClick={handleClick}
                                >
                                <Typography variant="body1">
                                    Keluar
                                </Typography>       
                            </Button>

                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default AccountCard
