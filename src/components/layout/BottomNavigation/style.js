import { makeStyles } from "@material-ui/core/styles";

const bottomNavWidth = 415
const bottomNavHeight= 30
const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.main,
    // background: theme.palette.bottomNav.background,
    position: "fixed",
    width: "100%",
    [theme.breakpoints.up('sm')]: {
      maxWidth: bottomNavWidth,
    },
    minHeight: bottomNavHeight,
    transform:"translate(-50%)",
    left:"50%",
    bottom: 0,
    zIndex: 5,
    overflow: "hidden",
  },
  bottomNavItem: {
    color: theme.palette.bottomNav.inactive,
    opacity: 0.5,
    padding: 12,
    "&$bottomNavItemSelected": {
      color: theme.palette.primary.main,
      opacity: 1,
      padding: 12,
    },
    "&:hover": {
      color: theme.palette.primary.dark,
      opacity: 1,
    },
  },
  bottomNavItemLabel: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "100%",
    
    "&$bottomNavItemSelected": {
      fontSize: 12,
    },
  },
  bottomNavItemSelected: {},
}));

export default useStyles;