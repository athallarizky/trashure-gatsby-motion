import React from 'react'
import { Box } from '@material-ui/core'
import AppContainer from 'components/layout/AppContainer'
import BaseLayout from 'components/layout/BaseLayout'
import TopNavigation from 'components/layout/TopNavigation'
import NavBackButton from 'components/shared/NavBackButton'
import NavCaption from 'components/shared/NavCaption'
import AccountEditForm from 'components/shared/AccountEditForm'

const AccountEdit = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation>
                    <NavBackButton/>
                    <NavCaption caption="Edit Akun" withBackButton/>
                </TopNavigation>
                <Box mt={10}>
                    <AccountEditForm/>
                </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default AccountEdit
