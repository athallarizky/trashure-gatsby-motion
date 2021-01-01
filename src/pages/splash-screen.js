import React from 'react'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import { Box } from '@material-ui/core'
import TrashureLogoWhite from 'assets/images/trashure-logo-white.svg'
const SplashScreen = () => {
    return (
        <BaseLayout>
            <AppContainer noPadding>
                <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center" bgcolor="primary.main"> 
                    <img src={TrashureLogoWhite} alt="trashure-logo-white" width="115.05px"/>
                </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default SplashScreen
