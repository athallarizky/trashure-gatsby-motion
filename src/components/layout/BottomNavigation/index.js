import React from 'react'
import { createHistory } from '@reach/router'
import { navigate } from "gatsby";
import { Box, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './style'
const BottomNav = () => {
    const classes = useStyles()
    const pathname = window.location.pathname;
    const [value, setValue] = React.useState(pathname);

    const handleChange = (e, uri) => {
        navigate(uri)
        setValue(uri)
    }

    const menus = [
        { label: "Beranda", value: "/home", icon:<HomeIcon/>  },
        { label: "Penukaran", value: "/exchange", icon:<AutorenewIcon/>  },
        { label: "Scan", value: "/scan", icon:<SearchIcon/>  },
        { label: "Harga", value: "/prices", icon:<LocalOfferIcon/>  },
        { label: "Akun", value: "/account", icon:<PersonIcon/>  },
    ]
    return (
        <BottomNavigation
            showLabels
            onChange={handleChange}
            value={value}
            className={classes.root}
        >
            { menus.map( (menu,index)=> (
                <BottomNavigationAction
                    key={index}
                    label={menu.label}
                    value={menu.value}
                    icon={menu.icon}
                    classes={{
                        root:classes.bottomNavItem,
                        selected:classes.bottomNavItemSelected,
                        label:classes.bottomNavItemLabel
                    }}
                />
            ))}
        </BottomNavigation>
    )
}

export default BottomNav
