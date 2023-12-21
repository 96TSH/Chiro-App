import React from "react";
import {
  Container,
  Typography,
  Box,
  CssBaseline,
  Paper,
  Button,
  Grid,
  Slide,
} from "@mui/material";
import stock1 from "../../images/stock1.jpg";
import AspectRatio from '@mui/joy/AspectRatio';
import { Link } from "react-router-dom";

const TextBox = ({ children }) => {
  return (
    <Typography align="center" variant="h6" sx={{ padding: 1 }}>
      {children}
    </Typography>
  );
};

const Homepage = () => {
  const styles = {
    typography: {
      color: "black",
      fontFamily: "Century Gothic",
      paddingBottom: 1,
    },
    button: {
      color: "white",
      fontSize: 20,
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "100%",
        width: "100%",
      }}
    >
      <CssBaseline />
      <Grid container>
        <AspectRatio sx={{ width: "100%" }}>
          <Grid
            item
            xs={12}
            sx={{
              backgroundImage: `url(${stock1})`,
              backgroundSize: "cover",
            }}
          >
            <Box
              sx={{
                height: "inherit",
                width: "inherit",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                paddingLeft: "10%",
              }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Box>
                <Slide
                  direction="right"
                  in={Homepage}
                  mountOnEnter
                  unmountOnExit
                  style={{ transitionDelay: 300, transitionDuration: 1000 }}
                  sx={{backgroundColor:"white", py:3, px:3, opacity: 0.65, boxShadow: 5, borderRadius: '16px'}}
                >
                  <Typography variant="h4" sx={styles.typography}>
                    <b>
                      INITIAL CONSULTATION
                      <br />
                      WITH ASSESSMENT 
                      <br/>
                      @ $58 (U.P. $230)
                    </b>
                  </Typography>
                </Slide>
              </Box>
              <Slide
                direction="right"
                in={Homepage}
                mountOnEnter
                unmountOnExit
                style={{
                  transitionDelay: 800,
                  transitionDuration: 1000,
                }}
              >
                <Box sx={{mt:2}}>
                  <Button
                    component={Link}
                    to="/trial"
                    variant="contained"
                    color="primary"
                    sx={styles.button}
                  >
                    Book Your Trial Today!
                  </Button>
                </Box>
              </Slide>
            </Box>
          </Grid>
        </AspectRatio>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: "lightgray",
            padding: 8,
            borderRight: "1px solid lightslategray",
          }}
        >
          <Box>
            <Typography
              align="center"
              variant="h4"
              sx={{ color: "maroon", paddingBottom: 4 }}
            >
              Our Vision:
            </Typography>
            <TextBox>
              • Become a leading provider of transformative chiropractic care.
            </TextBox>
            <TextBox>
              • Focus on holistic health, injury prevention, and wellness.
            </TextBox>
            <TextBox>
              • Cultivate a warm, welcoming healing environment.
            </TextBox>
            <TextBox>
              • Contribute to a healthier, happier, pain-free world through
              outreach and education.
            </TextBox>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: "lightgray", padding: 8 }}>
          <Box>
            <Typography
              align="center"
              variant="h4"
              sx={{ color: "maroon", paddingBottom: 4 }}
            >
              Our Mission:
            </Typography>
            <TextBox>
              • Empower individuals for optimal health and well-being.
            </TextBox>
            <TextBox>
              • Provide holistic, evidence-based chiropractic care.
            </TextBox>
            <TextBox>
              • Commit to excellence, education, and community involvement.
            </TextBox>
            <TextBox>
              • Strive for a pain-free and vibrant life for every patient.
            </TextBox>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
