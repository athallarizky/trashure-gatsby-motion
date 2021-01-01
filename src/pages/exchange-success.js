import React from 'react'
import { Box } from '@material-ui/core'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import ExchangeSuccess from 'components/shared/ExchangeSuccess'

const SuccessExchance = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <Box minHeight="90vh" display="flex" alignItems="center" justifyContent="center">
                    <ExchangeSuccess/>
                </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default SuccessExchance
