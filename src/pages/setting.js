import React from 'react'
import AppContainer from 'components/layout/AppContainer'
import BaseLayout from 'components/layout/BaseLayout'
import TopNavigation from 'components/layout/TopNavigation'
import NavBackButton from 'components/shared/NavBackButton'
import NavCaption from 'components/shared/NavCaption'
import { Box } from '@material-ui/core'

import SettingCard from 'components/shared/SettingCard'

import GTranslateIcon from '@material-ui/icons/GTranslate';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import LockIcon from '@material-ui/icons/Lock';
import EventNoteIcon from '@material-ui/icons/EventNote';
import StarIcon from '@material-ui/icons/Star';

const settingListOne = [
    {icon:<GTranslateIcon/>, title:"Ganti Bahasa", href:"#"},
    {icon:<NotificationsIcon/>, title:"Notifikasi", href:"#"},
]

const settingListTwo = [
    {icon:<HelpIcon/>, title:"Bantuan", href:"#"},
    {icon:<LockIcon/>, title:"Kebijakan Privasi", href:"#"},
    {icon:<EventNoteIcon/>, title:"Ketentuan Layanan", href:"#"},
    {icon:<StarIcon/>, title:"Beri Kami Nilai", href:"#"},
]

// icon:PropTypes.string,
//     title:PropTypes.string,
//     isLast:PropTypes.bool,
//     href:PropTypes.string,

 
const Settings = () => {
    return (
        <BaseLayout>
            <AppContainer noPadding>
                <TopNavigation>
                    <NavBackButton/>
                    <NavCaption withBackButton caption="Pengaturan"/>
                </TopNavigation>
                <Box pt={10} mb={2}>
                    {settingListOne.map((settingOne,index) =>
                        <SettingCard 
                            isLast={settingListOne.length !== index+1 ? true:false}
                            title={settingOne.title}
                            icon={settingOne.icon}
                            href={settingOne.href}    
                        />
                    )}
                </Box>
                <Box>
                    {settingListTwo.map((settingTwo,index) =>
                        <SettingCard 
                            isLast={settingListTwo.length !== index+1 ? true:false}
                            title={settingTwo.title}
                            icon={settingTwo.icon}
                            href={settingTwo.href}    
                        />
                    )}
                </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default Settings
