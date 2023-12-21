import { useState, useEffect, useContext } from "react";
import {
  Container,
  Typography,
  Box,
  CssBaseline,
  TableContainer,
  TableBody,
  TableCell,
  tableCellClasses,
  Table,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import ProfileTableRow from "../reusable/ProfileTableRow";
import ProfileAvatar from "../reusable/ProfileAvatar";
import BookingHandler from "../reusable/BookingHandler";

const Profile = () => {
  const {
    profileData,
    bookingData,
    fetchBooking,
    logout,
    setIsLoggedIn,
    invalidAppointment,
  } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBooking();
  }, []);

  const handleLogOut = (event) => {
    event.preventDefault();
    logout();
    setIsLoggedIn(false);
    navigate("/login");
  };

  const beautifyDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const beautifiedDateTime = date.toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
      hour12: true,
      timeZone: "Asia/Singapore",
    });
    return beautifiedDateTime;
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "darkslategray",
      fontSize: 16,
      color: theme.palette.common.white,
      fontFamily: "century gothic",
    },
  }));

  const styles = {
    paperContainer: {
      backgroundColor: "white",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginInline: "5%",
      marginBottom: "5%",
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        height: "100%",
        width: "100%",
        justifyContent: "space-evenly",
        paddingTop: "2%",
        paddingBottom: "5%",
        paddingInline: "5%",
      }}
    >
      <CssBaseline />
      <Box sx={{ display: "flex", justifyContent: "end", mb: 3, mx: 7 }}>
        <Button variant="contained" onClick={handleLogOut}>
          Log Out
        </Button>
      </Box>
      <Grid container>
        <Grid item xs={5}>
          <Paper elevation={5} style={styles.paperContainer}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 6,
              }}
            >
              <ProfileAvatar name={profileData.registration.name} />
            </Box>
            <TableContainer
              sx={{ width: "auto", paddingInline: 5, paddingBottom: 5 }}
            >
              <Table>
                <TableBody>
                  <ProfileTableRow
                    label="Name"
                    item={profileData.registration.name}
                  />
                  <ProfileTableRow
                    label="Diagnosis"
                    item={profileData.diagnosis}
                  />
                  <ProfileTableRow
                    label="Package"
                    item={profileData.packageName}
                  />
                  <ProfileTableRow
                    label="Treatment Stage"
                    item={profileData.stage}
                  />
                  <ProfileTableRow
                    label="Number Of Treatments"
                    item={profileData.numberOfTreatments}
                  />
                  <ProfileTableRow
                    label="Remaining Treatments"
                    item={profileData.numberOfTreatments - bookingData.length}
                  />
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper elevation={5} style={styles.paperContainer}>
            <TableContainer sx={{ width: "auto", padding: 5 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell colSpan={2}>
                      <b>Account Details</b>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <ProfileTableRow
                    label="Username"
                    item={profileData.username}
                  />
                  <ProfileTableRow
                    label="Password"
                    item={profileData.password}
                  />
                  <ProfileTableRow
                    label="Phone Number"
                    item={profileData.registration.phoneNumber}
                  />
                  <ProfileTableRow
                    label="Email"
                    item={profileData.registration.email}
                  />
                  <ProfileTableRow
                    label="Condition Type"
                    item={profileData.registration.conditionType}
                  />
                  <ProfileTableRow
                    label="Source"
                    item={profileData.registration.source}
                  />
                  <ProfileTableRow
                    label="Outlet"
                    item={profileData.registration.outlet}
                  />
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={5} style={styles.paperContainer}>
            <TableContainer sx={{ width: "auto", padding: 5 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell colSpan={2}>
                      <b>Upcoming Appointment</b>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookingData &&
                    bookingData.length > 0 &&
                    !bookingData[bookingData.length - 1].hasCompleted && (
                      <ProfileTableRow
                        label="Upcoming"
                        item={beautifyDateTime(
                          bookingData[bookingData.length - 1]
                            .appointmentDateTime
                        )}
                      />
                    )}
                  {invalidAppointment && (
                    <Typography sx={{ color: "red" }}>
                      Timeslot is already taken.
                    </Typography>
                  )}
                  <BookingHandler />
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper elevation={5} style={styles.paperContainer}>
            <TableContainer sx={{ width: "auto", padding: 5 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell colSpan={2}>
                      <b>Past Appointments</b>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookingData &&
                    bookingData.length > 0 &&
                    bookingData[0].hasCompleted === true &&
                    bookingData
                      .filter((booking) => booking.hasCompleted === true)
                      .reverse()
                      .map((booking, i) => (
                        <ProfileTableRow
                          label={`Appointment ${i + 1}`}
                          item={beautifyDateTime(booking.appointmentDateTime)}
                        />
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;

// const pastBookings = bookingData.slice(0, bookingData.length - 1);
