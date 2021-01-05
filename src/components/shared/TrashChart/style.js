import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    chartWrapper: {
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        borderRadius: 8,
    },
    chartTitle: {
        padding: 16,
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey[100],
        /* Inter Medium 14 */
        fontWeight: 500,
    },
}));

export default useStyles;