import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Box, Typography, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DepositImage from "assets/images/deposit-img.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
},

cardContent: {
    marginBottom: 15,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    boxShadow:'0px 4px 12px rgba(77, 77, 77, 0.03)'
  },
  cardMedia: {
    height: 52,
    width: 52,
  },
}));

const DepositCard = (props) => {
  const classes = useStyles();
  const { title, id, date, status, images, href } = props;

  return (
    <Link to={href} className={classes.root}>
      <Card className={classes.cardContent} elevation={0}>
        <Box className="left" display="flex" alignItems="center" width="100%">
          <Box mr={2}>
            <CardMedia
              image={images}
              title="Deposit Image"
              className={classes.cardMedia}
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <Box display="flex" mb={1}>
              <Box mr={1}>
                <Typography variant="h7">
                  <strong>{title}</strong>
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2">{id}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="body2">{date}</Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body2">
              {status === 'Proses' ? <Box color="secondary.main">{status}</Box> : <Box color="primary.main">{status}</Box>}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default DepositCard;

DepositCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string,
  href: PropTypes.string,
  images: PropTypes.string,
};
