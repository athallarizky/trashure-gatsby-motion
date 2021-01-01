import React from 'react'
import BaseLayout from 'components/layout/BaseLayout'
import AppWrapper from 'components/layout/AppWrapper'
import AppContainer from 'components/layout/AppContainer'
import { Box, Typography, Button } from '@material-ui/core'

const Homepage = () => {
  return (
    <BaseLayout>
      <AppWrapper>
        <AppContainer noPadding>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h3">
              Hello Trashure Apps
            </Typography>
            <Button variant="contained" color="primary">
              adasdasd
            </Button>
          </Box>
        </AppContainer>
      </AppWrapper>
    </BaseLayout>
  )
}

export default Homepage
