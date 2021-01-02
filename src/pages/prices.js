import { Box } from '@material-ui/core'
import AppContainer from 'components/layout/AppContainer'
import BaseLayout from 'components/layout/BaseLayout'
import TopNavigation from 'components/layout/TopNavigation'
import NavCaption from 'components/shared/NavCaption'
import BottomNavigation from 'components/layout/BottomNavigation'
import React from 'react'
import PriceCard from 'components/shared/PriceCard'

import TrashPlastic from 'assets/images/trash-plastic.png'
import TrashOrganic from 'assets/images/trash-organic.png'
import TrashCan from 'assets/images/trash-can.png'
import TrashCardboard from 'assets/images/trash-cardboard.png'

const priceLists = [
    {title:'Sampah Kaleng', price:'5000', unit:'Kg', photo:TrashCan, href:'#'},
    {title:'Sampah Kardus', price:'4000', unit:'Kg', photo:TrashCardboard, href:'#'},
    {title:'Sampah Plastik', price:'3500', unit:'Kg', photo:TrashPlastic, href:'#'},
    {title:'Sampah Organik', price:'2500', unit:'Kg', photo:TrashOrganic, href:'#'},
]

const Prices = () => {
    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation>
                    <NavCaption caption="Harga Sampah"/>
                </TopNavigation>
                <Box mt={10} pb={8}>
                    {priceLists.map((priceList, index) => (
                        <PriceCard
                            title={priceList.title}
                            price={priceList.price}
                            photo={priceList.photo}
                            href={priceList.href}
                            unit={priceList.unit}
                        />
                    ))}
                </Box>
            </AppContainer>
            <BottomNavigation/>
        </BaseLayout>
    )
}

export default Prices
