import React from 'react'
import { Box } from '@material-ui/core'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import TopNavigation from 'components/layout/TopNavigation'
import NavCaption from 'components/shared/NavCaption'
import BottomNavigation from 'components/layout/BottomNavigation'
import ExchangeAccordion from 'components/shared/ExchangeAccordion'
const Exchange = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation whiteBg>
                    <NavCaption caption="Penukaran"/>
                </TopNavigation>
                <Box minHeight="100vh" mt={10}>
                    {/* exchange */}
                    <ExchangeAccordion/>
                </Box>
            </AppContainer>
            <BottomNavigation/>
        </BaseLayout>
    )
}

export default Exchange
