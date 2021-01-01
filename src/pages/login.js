import React from 'react'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import LoginForm from 'components/shared/LoginForm'
import LoginOAuth from 'components/shared/LoginOAuth'
import { Box, Typography } from '@material-ui/core'
import TrashureLogoGreen from 'assets/images/trashure-logo-green.svg'

const Login = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <Box minHeight="80vh">
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="25vh">
                        <Box>
                            <img src={TrashureLogoGreen} alt="trashure-logo-green" width="76px"/>
                        </Box>
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                                Trashure
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <LoginForm/>
                    </Box>
                    <Box>
                        <LoginOAuth/>
                    </Box>
                </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default Login
