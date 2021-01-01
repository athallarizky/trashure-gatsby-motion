import { makeStyles } from '@material-ui/core/styles'

const navHeight = 50
const navWidth  = 415 // navWidth == wrapperWidth
const useStyles = makeStyles( theme => ({
    root:{
       background:theme.palette.appBackground.main,
    //    background:theme.palette.primary.main,
       boxShadow:'none',
       minHeight:navHeight,
       margin:'0 auto',
       [theme.breakpoints.up('sm')]: {
            maxWidth: navWidth,
        },
       left:0,
       right:0,
    },
    whiteBg:{
        background:'#FFF',
        boxShadow:'0px 4px 12px rgba(81, 81, 81, 0.05)'
    }

}))

export default useStyles