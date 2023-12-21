import { useState, useEffect, useContext } from "react";
import {
  TableCell,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Context } from "../../context/Context";
import { format } from "date-fns-tz";

function BookingHandler() {
  const {
    createBooking,
    updateBooking,
    deleteBooking,
    bookingData,
    fetchBooking,
    dateTimeFormula,
  } = useContext(Context);
  const [createOpen, setCreateOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState("");
  const [updatedAppointment, setUpdatedAppointment] = useState("");

  const handleCreateOpen = () => {
    setCreateOpen(true);
  };

  const handleCreateClose = () => {
    setCreateOpen(false);
  };

  const handleCreateBooking = (event) => {
    event.preventDefault();
    console.log(newAppointment);
    createBooking(newAppointment)
      .then(() => fetchBooking())
      .then(() => setCreateOpen(false));
  };

  const handleUpdateOpen = () => {
    setUpdateOpen(true);
  };

  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

  const handleUpdateBooking = (event) => {
    event.preventDefault();
    console.log(updatedAppointment);
    updateBooking(updatedAppointment)
      .then(() => fetchBooking())
      .then(() => setUpdateOpen(false));
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteBooking = (event) => {
    event.preventDefault();
    deleteBooking()
      .then(() => fetchBooking())
      .then(() => setDeleteOpen(false));
  };

  return (
    <TableRow>
      {bookingData &&
      bookingData.length > 0 &&
      !bookingData[bookingData.length - 1].hasCompleted ? (
        <TableCell colSpan={2} align="right">
          <Button
            variant="contained"
            onClick={handleUpdateOpen}
            sx={{ marginInline: 3 }}
          >
            Update
          </Button>
          <Dialog open={updateOpen} onClose={handleUpdateClose}>
            <DialogTitle>Update Appointment</DialogTitle>
            <DialogContent>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Update Appointment"
                  timeSteps={{ hours: 1, minutes: 30 }}
                  onChange={(updatedAppointment) =>
                    setUpdatedAppointment(
                      format(
                        new Date(updatedAppointment.toISOString()),
                        "yyyy-MM-dd'T'HH:mm:ss",
                        { timeZone: "Asia/Singapore" }
                      )
                    )
                  }
                />
              </LocalizationProvider>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleUpdateClose}>Close</Button>
              <Button onClick={handleUpdateBooking}>Update</Button>
            </DialogActions>
          </Dialog>
          <Button variant="contained" onClick={handleDeleteOpen}>
            Delete
          </Button>
          <Dialog open={deleteOpen} onClose={handleDeleteClose}>
            <DialogTitle>
              Are you sure you want to delete the appointment?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleDeleteClose}>No</Button>
              <Button onClick={handleDeleteBooking}>Yes</Button>
            </DialogActions>
          </Dialog>
        </TableCell>
      ) : (
        <TableCell colSpan={2} align="right">
          <Button
            variant="contained"
            onClick={handleCreateOpen}
            sx={{ marginInline: 3 }}
          >
            Create
          </Button>
          <Dialog open={createOpen} onClose={handleCreateClose}>
            <DialogTitle>Create Appointment</DialogTitle>
            <DialogContent>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="New Appointment"
                  timeSteps={{ hours: 1, minutes: 30 }}
                  onChange={(newAppointment) =>
                    setNewAppointment(
                      format(
                        new Date(newAppointment.toISOString()),
                        "yyyy-MM-dd'T'HH:mm:ss",
                        { timeZone: "Asia/Singapore" }
                      )
                    )
                  }
                />
              </LocalizationProvider>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCreateClose}>Close</Button>
              <Button onClick={handleCreateBooking}>Create</Button>
            </DialogActions>
          </Dialog>
        </TableCell>
      )}
    </TableRow>
  );
}

export default BookingHandler;
