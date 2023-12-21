import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Grid,
} from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import clinic1 from "../../images/clinic1.jpg";
import clinic2 from "../../images/clinic2.jpg";
import clinic3 from "../../images/clinic3.jpg";
import clinic4 from "../../images/clinic4.jpg";

const Locations = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const outlets = [
    {
      name: "Bugis",
      image: clinic1,
      address: "1 Rochor Central, #03 - 102, Singapore 180001",
      phone: "6102 1202",
      hours: "Monday to Sunday: 8am-1pm, 3pm-9pm",
      mrt: "Bugis",
      googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.3946494784486!2d103.85489998843377!3d1.3013155073243912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19ba3daad8af%3A0x1d00f7ad8ef7d993!2sSingapore%20180001!5e0!3m2!1sen!2ssg!4v1698239794965!5m2!1sen!2ssg",
    },
    {
      name: "Jurong West",
      image: clinic2,
      address: "696 Jurong West Central 1, #01 - 11 Singapore 640696",
      phone: "6120 2351",
      hours: "Monday to Sunday: 8am-1pm, 3pm-9pm",
      mrt: "Boon Lay",
      googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.863554142814!2d103.70288643080329!3d1.346935930568442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0feb6f29c757%3A0x212a11a9b28cae8a!2sSingapore%20640696!5e0!3m2!1sen!2ssg!4v1698240436029!5m2!1sen!2ssg",
    },
    {
      name: "Bukit Merah",
      image: clinic3,
      address: "128 Bukit Merah View, #01 - 20, Singapore 150128",
      phone: "6901 3013",
      hours: "Monday to Sunday: 8am-1pm, 3pm-9pm",
      mrt: "Tiong Bahru",
      googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815141603581!2d103.82284365045363!3d1.2848704172516165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da197dbb344e75%3A0xf28b93aaf6abe18c!2sSingapore%20150128!5e0!3m2!1sen!2ssg!4v1698240706340!5m2!1sen!2ssg",
    },
    {
      name: "Macpherson",
      image: clinic4,
      address: "107 Circuit Rd, #02 - 98, Singapore 379481",
      phone: "6124 0161",
      hours: "Monday to Sunday: 8am-1pm, 3pm-9pm",
      mrt: "Macpherson",
      googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.373541277827!2d103.88819865999322!3d1.3277421108942973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da178a5a6afffd%3A0xd07225e0e4411b67!2sSingapore%20379481!5e0!3m2!1sen!2ssg!4v1698240803307!5m2!1sen!2ssg",
    },
  ];

  const styles = {
    listItemButton: {
      marginTop: 0.1,
      height: 60,
      bgcolor: "seagreen",
      borderRadius: 2,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      "&.Mui-selected": {
        border: "1px solid lightslategray",
        borderRight: 0,
        marginTop: 0.1,
        bgcolor: "darkslategray",
        borderRadius: 2,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      ":hover": {
        bgcolor: "mediumseagreen",
      },
    },
    listItemText: {
      color: "white",
      fontFamily: "Century Gothic",
      fontSize: 17,
    },
    typography: {
      color: "white",
      fontFamily: "Century Gothic",
      padding: 1,
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        height: "100%",
        width: "100%",
        padding: "5%",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "black", fontFamily: "Century", paddingBottom: 2 }}
      >
        Our Clinics
      </Typography>
      <Grid container>
        <CssBaseline />
        <Grid item xs={3}>
          <List component="nav" aria-label="locations" disablePadding>
            {outlets &&
              outlets.map((outlet, i) => (
                <ListItemButton
                  selected={selectedIndex === i}
                  onClick={(event) => handleListItemClick(event, i)}
                  sx={styles.listItemButton}
                >
                  <ListItemText
                    disableTypography
                    primary={outlet.name}
                    sx={styles.listItemText}
                  />
                </ListItemButton>
              ))}
          </List>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            bgcolor: "darkslategray",
            padding: 5,
            border: "1px solid lightslategray",
            borderRadius: 2,
            borderTopLeftRadius: 0,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              paddingBottom: 3,
              color: "white",
              fontFamily: "Century",
            }}
          >
            {outlets[selectedIndex].name}
          </Typography>
          <AspectRatio
            ratio="5/3"
            sx={{ width: "100%", paddingRight: "10%", paddingBottom: 3 }}
          >
            <img
              src={outlets[selectedIndex].image}
              alt="error"
            />
          </AspectRatio>
          <Typography sx={styles.typography}>
            <b>Address:</b> {outlets[selectedIndex].address}
          </Typography>
          <Typography sx={styles.typography}>
            <b>Phone No:</b> {outlets[selectedIndex].phone}
          </Typography>
          <Typography sx={styles.typography}>
            <b>Opening Hours:</b> {outlets[selectedIndex].hours}
          </Typography>
          <Typography sx={styles.typography}>
            <b>Nearest MRT:</b> {outlets[selectedIndex].mrt}
          </Typography>
          <iframe src={outlets[selectedIndex].googleMap} width="100%" height="400" ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Locations;
