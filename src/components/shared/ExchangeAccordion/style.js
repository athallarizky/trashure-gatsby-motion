import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    root: {
        width: '100%',
    },
    accordionWrapper:{
        background:'#FFF',
        boxShadow:'0px 4px 12px rgba(81, 81, 81, 0.03)',
        borderRadius:4,
        border:'transparent',
        marginBottom:15,
        padding:"15px 0",
        position:'static',

        "& .MuiAccordion-root:before": {
            backgroundColor: '#FFF !important'
          },

        "& .MuiAccordionSummary-root":{
            "& .MuiAccordionSummary-content":{
                alignItems:'center'
            }
        },
        "& .MuiCollapse-container":{
            "& .MuiCollapse-wrapper":{
                "& .MuiCollapse-wrapperInner":{
                    "& .MuiAccordionDetails-root":{
                        display:'block'
                    }
                }
            }
        }
    },
    heading: {
        display:'flex',
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '20%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },

}))

export default useStyles