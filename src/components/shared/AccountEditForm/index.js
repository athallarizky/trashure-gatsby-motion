import React from 'react'
import { navigate } from 'gatsby'
import { Box, Typography, TextField, Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ProfilePhoto from 'assets/images/profile-photo.png'

const useStyles = makeStyles( theme => ({
    root:{
        //
    },
    profilephoto:{
        width:68,
        height:68,
        borderRadius:50,
        // border:'3px solid #FFF',
        // left:'50%',
        // marginLeft:'-40px',
    },
    buttonEditImage:{
        minHeight:0,
        minWidth:0,
    },
    buttonText:{
        textTransform:'capitalize'
    },
    placeholder:{
        fontSize:12,
        opacity:.34,
        marginBottom:2,
    }
}))
const AccountEdit = () => {
    const classes = useStyles()
    const handleSaveEdit = () => navigate('/account')

    return (
        <Box className={classes.root}>
            <Box display="flex" justifyContent="space-between">
                <Box className={classes.profilephoto} style={{backgroundImage:`url('${ProfilePhoto}')`, backgroundSize:'contain'}}/>
                <Button className={classes.buttonEditImage}>
                    <Typography variant="overline" className={classes.buttonText}>
                        Edit Gambar
                    </Typography>
                </Button>
            </Box>  
            <Box width="100%" border="1px solid #00000010;" my={4} />
            <Box my={3}>
                <Typography variant="body2" className={classes.placeholder}>
                    Nama
                </Typography>
                <TextField 
                    id="fullname" 
                    type="text" 
                    fullWidth 
                    value="Muhammad Rafif"
                />
            </Box>
            <Box my={3}>
                <Typography variant="body2" className={classes.placeholder}>
                    Nomor HP
                </Typography>
                <TextField 
                    id="phone-number" 
                    type="tel" 
                    fullWidth 
                    value="08992220222"
                />
            </Box>
            <Box my={3}>
                <Typography variant="body2" className={classes.placeholder}>
                    Email
                </Typography>
                <TextField 
                    id="email" 
                    type="email" 
                    fullWidth 
                    value="rafifsky@student.telkomuniversity.ac.id"
                />
            </Box>
            <Box my={3} mb={10}>
                <Typography variant="body2" className={classes.placeholder}>
                    Tanggal Lahir
                </Typography>
                <TextField 
                    id="born-date" 
                    type="text" 
                    fullWidth 
                    value="07 - Juli - 2000"
                />
            </Box>
            <Box px={1}>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    disableElevation 
                    fullWidth 
                    style={{minHeight:56, color:'#FFF'}}
                    onClick={handleSaveEdit}
                    >
                    <Typography variant="body1" >
                        Simpan
                    </Typography>       
                </Button>

            </Box>
        </Box>
    )
}

export default AccountEdit
