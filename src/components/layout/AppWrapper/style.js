import { makeStyles } from '@material-ui/core/styles'

const wrapperWidth = 415

const useStyles = makeStyles( theme => ({
    root:{
        // background:'#f1f2f6'
        background:theme.palette.appBackground.main,
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        minHeight: '100vh',
        margin: '0 auto',
        // boxShadow: '0 0 24px rgba(0,0,0,.15)',
        [theme.breakpoints.up('sm')]: {
            maxWidth: wrapperWidth,
        },
    }
}))

export default useStyles