import React from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@material-ui/core";
import useStyles from "./style";

const MobileChargeForm = () => {
  const classes = useStyles();

  const [phoneNumb, setPhoneNumb] = React.useState("")
  const [value, setValue] = React.useState("");

  const handleChangePhoneNumb = (event) => setPhoneNumb(event.target.value)
  const handleChangePrice = (event) => setValue(event.target.value);

  console.log('value', value)
  console.log('phoneNumb', phoneNumb)

  const priceLists = [
    { nominal: "Rp. 1000", realPrice: "Rp. 1500" },
    { nominal: "Rp. 5000", realPrice: "Rp. 6000" },
    { nominal: "Rp. 10000", realPrice: "Rp. 11000" },
    { nominal: "Rp. 20000", realPrice: "Rp. 21000" },
    { nominal: "Rp. 50000", realPrice: "Rp. 51000" },
  ];
  return (
    <Box className={classes.root}>
      <Box className={classes.formWrapper}>
        <Box my={3}>
          <TextField 
            id="phone-number" 
            type="tel" 
            label="Nomor HP" 
            fullWidth 
            onChange={handleChangePhoneNumb}
            InputProps={{
                inputProps:{ inputmode: 'numeric', pattern: '[0-9]*' }
            }}
            />
        </Box>
        <Box my={3}>
          <TextField
            select
            id="standard-select-currency"
            label="Nominal"
            value={value}
            onChange={handleChangePrice}
            fullWidth
          >
            {priceLists.map((priceList, index) => (
              <MenuItem value={priceList.realPrice}>
                <Box width="100%">
                  <Typography variant="body2">{priceList.nominal}</Typography>
                  <Typography variant="h3">{priceList.realPrice}</Typography>
                </Box>
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            disableElevation 
            fullWidth 
            style={{minHeight:56, color:'#FFF'}} 
            disabled={phoneNumb==='' || value==='' ? true : false}>
            <Typography variant="body1">
                Tukar
            </Typography>       
        </Button>
      </Box>
    </Box>
  );
};

export default MobileChargeForm;
