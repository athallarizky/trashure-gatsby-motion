import React from 'react'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import TopNavigation from 'components/layout/TopNavigation'
import NavCaption from 'components/shared/NavCaption'
import AccountCard from 'components/shared/AccountCard'
import { Box } from '@material-ui/core'
import BottomNavigation from 'components/layout/BottomNavigation'

const Account = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation>
                    <NavCaption caption="Akun"/>
                </TopNavigation>
                <Box mt={10} pb={8}>
                    <AccountCard/>
                </Box>
            </AppContainer>
            <BottomNavigation/>
        </BaseLayout>
    )
}

export default Account
