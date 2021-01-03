import React from 'react'
import { Box } from '@material-ui/core'
import AppContainer from 'components/layout/AppContainer'
import BaseLayout from 'components/layout/BaseLayout'
import TopNavigation from 'components/layout/TopNavigation'
import NavBackButton from 'components/shared/NavBackButton'

import TipsBox from 'components/shared/TipsBox'
import TipsImages from 'assets/images/tips-images.png'
const Tips = () => {
    const exampleContent = `Cara memilah sampah yang baik, hal yang pertama harus kamu lakuin adalah dengan cara mengetahui jenis-jenis sampah tersebut, mulai dari sampah kering, sampah basah. Sampah kering biasa nya terdiri dari sampah botol-botolan, kaleng-kalengan bekas minuman biasanya, sampah basah bisanya bekas sisa-sisa makanan.

    Untuk memilahnya, kami sarankan untuk mengelompokkannya menjadi dua kelompok, yang pertama sampah kering yang kedua sampah basah, disarankan untuk menyetor sampah kering saja, agar mudah ditimbang dan dihitung beratnya.
    
    Jika anda mempunyai kardus, saran kami untuk memilah sampah kering tersebut menjadi beberapa kategori lagi, yang pertama sampah botol, yang kedua sampah kaleng dan yang terakhir adalah sampah kardus. Setelah itu masukkan sampah yang kalian pungut kedalam kardus-kardus yang sudah disediakan berdasarkan kategori yang sudah dibuat.`

    return (
        <BaseLayout>
            <AppContainer>
                <TopNavigation>
                    <NavBackButton/>
                </TopNavigation>
                <Box mt={8}>
                    <TipsBox
                        title="Cara memilah sampah yang baik"
                        date="17 April, 2019"
                        image={TipsImages}
                        content={exampleContent}
                    />
                </Box>
            </AppContainer>
        </BaseLayout>
    )
}

export default Tips
