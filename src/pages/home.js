import React from 'react'
import { Box } from '@material-ui/core'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import BottomNavigation from 'components/layout/BottomNavigation'
const Home = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <Box minHeight="80vh" bgcolor="teal">
                    home
                </Box>
            </AppContainer>
            <BottomNavigation/>
        </BaseLayout>
    )
}

export default Home
