import { makeStyles } from '@material-ui/core/styles'

const oauthButtonSize = '56px'
const useStyles = makeStyles( theme => ({
    root:{
        // background:'#33333320'
    },
    caption:{
        color:'#718093',
    },
    oauthButton:{
        minWidth:oauthButtonSize,
        maxWidth:oauthButtonSize,
        minHeight:oauthButtonSize,
        maxHeight:oauthButtonSize,
        background:theme.palette.primary.main
    }
}))

export default useStyles