import React from 'react'
import { Box } from '@material-ui/core'
import AppContainer from 'components/layout/AppContainer'
import BaseLayout from 'components/layout/BaseLayout'
import TopNavigation from 'components/layout/TopNavigation'
import NavCaption from 'components/shared/NavCaption'
import NavBackButton from 'components/shared/NavBackButton'
import NotificationTabs from 'components/shared/NotificationTabs'

const Notification = () => {
    return (
        <BaseLayout>
            <AppContainer noPadding>
                    <TopNavigation>
                        <NavBackButton/>
                        <NavCaption withBackButton caption="Notifikasi"/>
                    </TopNavigation>
                    <Box pt={10}>
                        <NotificationTabs/>
                    </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default Notification
