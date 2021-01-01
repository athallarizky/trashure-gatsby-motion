import React from 'react'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import TopNavigation from 'components/layout/TopNavigation'
import NavBackButton from 'components/shared/NavBackButton'
import NavCaption from 'components/shared/NavCaption'
import RegisterForm from 'components/shared/RegisterForm'
import LoginOAuth from 'components/shared/LoginOAuth'


import { Box, Typography } from '@material-ui/core'

const Register = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation>
                    <NavBackButton/>
                    <NavCaption caption="Daftar" width="90%" textAlign="center"/>
                </TopNavigation>
                <Box>
                    <RegisterForm/>
                </Box>
                <Box>
                    <LoginOAuth/>
                </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default Register
