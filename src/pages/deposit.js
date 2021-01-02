import React from 'react'
import { Box } from '@material-ui/core'
import BaseLayout from 'components/layout/BaseLayout'
import AppContainer from 'components/layout/AppContainer'
import TopNavigation from 'components/layout/TopNavigation'
import NavCaption from 'components/shared/NavCaption'
import NavBackButton from 'components/shared/NavBackButton'
import DepositCard from 'components/shared/DepositCard'
import DepositImage from 'assets/images/deposit-img.svg'

const depositDatas = [
    {title:'Trashbag ID', id:'1304A32DAE', date:'24/04/2019', status:'Proses', images:DepositImage, href:'#'},
    {title:'Trashbag ID', id:'1304A32DAE', date:'19/04/2019', status:'Proses', images:DepositImage, href:'#'},
    {title:'Trashbag ID', id:'1304A32DAE', date:'14/04/2019', status:'Selesai', images:DepositImage, href:'#'},
    {title:'Trashbag ID', id:'1304A32DAE', date:'10/04/2019', status:'Selesai', images:DepositImage, href:'#'},
    {title:'Trashbag ID', id:'1304A32DAE', date:'5/04/2019', status:'Selesai', images:DepositImage, href:'#'},
    {title:'Trashbag ID', id:'1304A32DAE', date:'28/03/2019', status:'Selesai', images:DepositImage, href:'#'},
    {title:'Trashbag ID', id:'1304A32DAE', date:'20/04/2019', status:'Selesai', images:DepositImage, href:'#'},
]
const Deposit = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation>
                    <NavBackButton/>
                    <NavCaption withBackButton caption="Setoran"/>
                </TopNavigation>
                <Box mt={10} minHeight="80vh">
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
            </AppContainer>
        </BaseLayout>
    )
}

export default Deposit
