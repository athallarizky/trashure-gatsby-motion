import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Tabs, Tab } from "@material-ui/core";
import NotificationCard from 'components/shared/NotificationCard'

import useStyles from "./style";

import NotifPhoneIcon from 'assets/images/notification-phone-icon.png'
import NotifLeafIcon from 'assets/images/notification-leaf-icon.png'
import linkajaIcon from 'assets/images/linkaja-icon.svg'
import DanaIcon from 'assets/images/dana-icon.svg'


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`panel-${index}`}
      aria-labelledby={`tab-panel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any,
  value: PropTypes.any,
};

const a11yProps = (index) => {
  return {
    id: `tab-panel-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

const transactionNotif = [
    {title:'Penukaran Pulsa', date:'now', message:'Pulsa sebesar 5000 dengan nomor kartu Tri...', href:'/notification-detail', icon:NotifPhoneIcon},
    {title:'Penukaran Pulsa', date:'20.50', message:'Pulsa sebesar 10000 dengan nomor kartu Tri...', href:'/notification-detail', icon:NotifPhoneIcon},
    {title:'Penukaran Pulsa', date:'25 Juni', message:'Pulsa sebesar 10000 dengan nomor kartu Tri...', href:'/notification-detail', icon:NotifPhoneIcon},
    {title:'Saldo DANA', date:'17 April', message:'Saldo dana sebesar 25000 berhasil ditukarka...', href:'/notification-detail', icon:DanaIcon},
    {title:'Saldo LinkAja', date:'20 Maret', message:'Saldo LinkAja sebesar 5000 berhasil ditukarka...', href:'/notification-detail', icon:linkajaIcon},
]

const otherNotif = [
    {title:'Update Trashure v1.3', date:'now', message:'Update App Trashure v1.3 kali ini merupakan...', href:'/notification-detail', icon:NotifLeafIcon},
    {title:'Update Trashure v1.2', date:'20.50', message:'Update App Trashure v1.2 kali ini membawa...', href:'/notification-detail', icon:NotifLeafIcon},
    {title:'Promo Pulsa', date:'25 Juni', message:'Diskon penukaran pulsa untuk pengguna kart...', href:'/notification-detail', icon:NotifPhoneIcon},

]

const NotificationTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="fullWidth"
        TabIndicatorProps={{
            style: {
              height:"2px",
            }
          }}
        className={classes.tabsWrapper}
      >
        <Tab label="Transaksi" {...a11yProps(0)} />
        <Tab label="Lainnya" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
          {transactionNotif.map( (transNotif,index) =>
            <NotificationCard
                key={index}
                title={transNotif.title}
                message={transNotif.message}
                icon={transNotif.icon}
                date={transNotif.date}
                href={transNotif.href}
            />
          )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {otherNotif.map( (other,index) =>
            <NotificationCard
                key={index}
                title={other.title}
                message={other.message}
                icon={other.icon}
                date={other.date}
                href={other.href}
            />
          )}
      </TabPanel>
    </Box>
  );
};

export default NotificationTab;
