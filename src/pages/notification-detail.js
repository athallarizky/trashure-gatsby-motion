import React from 'react'
import { Box, Typography } from '@material-ui/core'
import AppContainer from 'components/layout/AppContainer'
import BaseLayout from 'components/layout/BaseLayout'
import TopNavigation from 'components/layout/TopNavigation'
import NavCaption from 'components/shared/NavCaption'
import NavBackButton from 'components/shared/NavBackButton'

const NotificationDetail = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation>
                    <NavBackButton/>
                    <NavCaption withBackButton caption="Penukaran Pulsa" />
                </TopNavigation>
                <Box mt={8}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                        <Typography variant="body2">
                            <strong>Penukaran Pulsa</strong>
                        </Typography>
                        <Typography variant="body2">
                            25/06/2019
                        </Typography>
                    </Box>
                    <Box textAlign="justify">
                        Pulsa sebesar 5000 dengan nomor kartu Tri 08992220222 berhasil ditukar
                        kan. Sisa saldo anda sebesar Rp. 144.000
                    </Box>
                </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default NotificationDetail
