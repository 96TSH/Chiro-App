import { Box, Button, Icon, Typography } from "@mui/material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../../context/Context";

const Navbar = () => {
  const { isLoggedIn } = React.useContext(Context);

  const styles = {
    link: {
      color: "maroon",
      fontFamily: "Century Gothic",
      padding: 20,
      fontSize: 20,
    },
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingInline: 5, backgroundColor: "lightgray" }}
      >
        <Typography
          align="left"
          variant="h3"
          sx={{ color: "black", fontFamily: "century", px: 2, py: 2 }}
        >
          <b>NATURE CHIRO</b>
        </Typography>
        <nav>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/team" style={styles.link}>
            Our Team
          </Link>
          <Link to="/conditions" style={styles.link}>
            Conditions
          </Link>
          <Link to="/locations" style={styles.link}>
            Locations
          </Link>
          <Link to="/plans" style={styles.link}>
            Our Plans
          </Link>
          {!isLoggedIn && (
            <Link to="/login" style={styles.link}>
              Log In
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/trial" style={styles.link}>
              <Button variant="outlined">Book Now!</Button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/profile" style={styles.link}>
              <AccountCircleTwoToneIcon sx={{ width: 40, height: 40 }} />
            </Link>
          )}
        </nav>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Navbar;
