import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    root:{
        padding: 20,
        boxSizing: 'border-box',
        minHeight: 'calc(100vh - 80px)',
    },

    noPadding:{
        padding:0,
    },
    
    isFlexbox:{
        display:"flex",
        flexDirection: 'column',
    },

    hasBottomNav:{
        paddingBottom: 100,
    }
}))

export default useStyles