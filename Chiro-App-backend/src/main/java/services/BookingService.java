package services;

import java.time.LocalDateTime;
import java.util.List;

import dao.BookingDAO;
import entity.Booking;

public class BookingService {
    private BookingDAO bookingDAO;

    public BookingService(BookingDAO bookingDAO) {
        this.bookingDAO = bookingDAO;
    }

    public Booking getBooking(int clientID) {
        return bookingDAO.getBooking(clientID);
    }

    public List<Booking> getAllBookings(int clientID) {
        return bookingDAO.getAllBookings(clientID);
    }
    
    public Boolean checkIfUncompletedBookingExist(int clientID) {
    	return bookingDAO.checkIfUncompletedBookingExist(clientID);
    }

    public Boolean checkIfTimeSlotIsTaken (LocalDateTime bookingDateTime) {
        return bookingDAO.checkIfTimeSlotIsTaken(bookingDateTime);
    }

    public void createBooking(int clientID, LocalDateTime bookingDateTime) throws Exception{
    	if (checkIfUncompletedBookingExist(clientID)) {
    		throw new Exception("already have advanced booking.");
    		}
        if (checkIfTimeSlotIsTaken(bookingDateTime)) {
    		throw new Exception("Timeslot has already been taken.");
    		}
        bookingDAO.createBooking(clientID, bookingDateTime);
    }

    public Booking updateBooking(int clientID, LocalDateTime appointmentDateTime) throws Exception {
    	if (!checkIfUncompletedBookingExist(clientID)) {
    		throw new Exception("Unable to update past bookings.");
    		}
        if (checkIfTimeSlotIsTaken(appointmentDateTime)) {
    		throw new Exception("Timeslot has already been taken.");
    		}
        Booking bookingToUpdate = getBooking(clientID);
        bookingToUpdate.setAppointmentDateTime(appointmentDateTime);
        bookingDAO.updateBooking(bookingToUpdate);
        return bookingToUpdate;
    }

    public void deleteBooking(int clientID) throws Exception {
    	if (!checkIfUncompletedBookingExist(clientID)) {
    		throw new Exception("Unable to delete past bookings.");
    		}
        Booking bookingToDelete = getBooking(clientID);
        bookingDAO.deleteBooking(bookingToDelete.getId());
        
    }
}
