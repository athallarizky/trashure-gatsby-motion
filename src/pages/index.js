import React from 'react'
import { Link } from 'gatsby'
import BaseLayout from 'components/layout/BaseLayout'
import AppWrapper from 'components/layout/AppWrapper'
import AppContainer from 'components/layout/AppContainer'
import { Box, Typography, Button } from '@material-ui/core'

const pageLists = [
  {name:'Splash Screen', href:'/splash-screen'},
  {name:'Login', href:'/login'},
  {name:'Register', href:'/register'},
  {name:'Home', href:'/home'},
  // {name:'Penukaran', href:'/exchange'},
  {name:'Scan', href:'/scan'},
  {name:'Harga', href:'/prices'},
  {name:'Akun', href:'/account'},
  {name:'Edit Akun', href:'/account-edit'},
  {name:'Setor', href:'/deposit'},
  {name:'Penukaran', href:'/exchange'},
  {name:'Konfirmasi Penukaran', href:'/exchange-confirm'},
  {name:'Penukaran Sukses', href:'/exchange-success'},
  {name:'Notifikasi', href:'/notification'},
  {name:'Detail Notifikasi', href:'/notification-detail'},
  {name:'Pengaturan', href:'/setting'},
  {name:'Tips', href:'/tips'},

]
const Homepage = () => {
  return (
    <BaseLayout>
      <AppWrapper>
        <AppContainer>
          <Box display="flex" alignItems="center" pt={2} mb={5} justifyContent="center">
            <Typography variant="h3">
              Trashure Apps
            </Typography>
          </Box>
          <Box pb={8}>
            {pageLists.map((pageList,index) => 
              <Box mb={2}>
                <Link to={pageList.href} style={{textDecoration:'none', color:'#FFF'}}>
                  <Button disableElevation variant="contained" color="primary" fullWidth size="large">
                    {pageList.name}
                  </Button> 
                </Link>
              </Box>
            )}

          </Box>
          
        </AppContainer>
      </AppWrapper>
    </BaseLayout>
  )
}

export default Homepage
