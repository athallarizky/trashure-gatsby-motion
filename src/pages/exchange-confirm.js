import React from 'react'
import { Box } from '@material-ui/core'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import TopNavigation from 'components/layout/TopNavigation'
import NavBackButton from 'components/shared/NavBackButton'
import NavCaption from 'components/shared/NavCaption'
import ExchangeConfirm from 'components/shared/ExchangeConfirm'

const ConfirmExchance = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation whiteBg>
                    <NavBackButton/>
                    <NavCaption caption="Konfirmasi" withBackButton/>
                </TopNavigation>
                <Box minHeight="80vh" mt={10}>
                    <ExchangeConfirm/>
                </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default ConfirmExchance
