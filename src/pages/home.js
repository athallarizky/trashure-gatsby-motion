import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import { Box, Typography } from '@material-ui/core'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import BottomNavigation from 'components/layout/BottomNavigation'
import TopNavigation from 'components/layout/TopNavigation'
import NavCaption from 'components/shared/NavCaption'
import BalanceBox from 'components/shared/BalanceBox'
import TrashChart from 'components/shared/TrashChart'
import DepositCard from 'components/shared/DepositCard'
import TipsSwapper from 'components/shared/TipsSwapper'

import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import DepositImage from 'assets/images/deposit-img.svg'

const useStyles = makeStyles( theme => ({
    navIcon:{
        textDecoration:'none',
        color:'#33333390'
    }
}))

const depositDatas = [
    {title:'Trashbag ID', id:'1304A32DAE', date:'24/04/2019', status:'Proses', images:DepositImage, href:'#'},
    {title:'Trashbag ID', id:'1304A32DAE', date:'19/04/2019', status:'Proses', images:DepositImage, href:'#'},
    {title:'Trashbag ID', id:'1304A32DAE', date:'14/04/2019', status:'Selesai', images:DepositImage, href:'#'},
    {title:'Trashbag ID', id:'1304A32DAE', date:'10/04/2019', status:'Selesai', images:DepositImage, href:'#'},
]

const Home = () => {
    const classes = useStyles()
    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation withIcon>
                    <NavCaption caption="Trashure"/>
                    <Box display="flex">
                        <Box mr={1.5}>
                            <Link to="/notification" className={classes.navIcon}>
                                <NotificationsIcon/>
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/setting" className={classes.navIcon}>
                                <SettingsIcon/>
                            </Link>
                        </Box>

                    </Box>
                </TopNavigation>
                <Box mb={2} mt={10}>
                    <BalanceBox/>
                </Box>
                <Box  mb={8}>
                    <TrashChart/>
                </Box>
                <Box mb={1.5} display="flex" justifyContent="space-between">
                    <Typography variant="h3">
                        Setoran
                    </Typography>
                    <Link to="/deposit" style={{textDecoration:'none', color:'#333'}}>
                        <Typography variant="body2" >
                            Lihat semua
                        </Typography>
                    </Link>
                </Box>
                {/* <Box mb={8}> */}
                <Box pb={8}>
                    {depositDatas.map((depositData, index) => (
                        <DepositCard
                            key={index}
                            title={depositData.title}
                            id={depositData.id}
                            date={depositData.date}
                            status={depositData.status}
                            images={depositData.images}
                            href={depositData.href}
                        />
                    ))}
                </Box>
                {/* <Box pb={8}>
                    <Typography variant="h3">
                        Tips
                    </Typography>
                    <TipsSwapper/>
                </Box> */}
            </AppContainer>
            <BottomNavigation/>
        </BaseLayout>
    )
}

export default Home
