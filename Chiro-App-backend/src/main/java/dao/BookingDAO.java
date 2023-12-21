package dao;

import java.io.IOException;
import java.sql.*;
import java.time.LocalDateTime;

import javax.sql.*;
import javax.naming.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.*;
import java.util.Date;

import entity.Booking;

public class BookingDAO {

    Connection con;
    private boolean conFree = true;

    // Database configuration
    public static String url = "jdbc:mysql://localhost/chirodatabase";
    public static String dbdriver = "com.mysql.jdbc.Driver";
    public static String username = "root";
    public static String password = "root";

    public BookingDAO() throws Exception {
        try {
            Class.forName(dbdriver);
            con = DriverManager.getConnection(url, username, password);

        } catch (Exception ex) {
            System.out.println("Exception in BookingDAO: " + ex);
            throw new Exception("Couldn't open connection to database: " +
                    ex.getMessage());
        }
    }

    public void remove() {
        try {
            con.close();
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }

    protected synchronized Connection getConnection() {
        while (conFree == false) {
            try {
                wait();
            } catch (InterruptedException e) {
            }
        }

        conFree = false;
        notify();

        return con;
    }

    protected synchronized void releaseConnection() {
        while (conFree == true) {
            try {
                wait();
            } catch (InterruptedException e) {
            }
        }

        conFree = true;
        notify();
    }
    
    public Boolean checkIfUncompletedBookingExist(int clientID) {
    	
    	Boolean hasUncompleted = null;
    	try {
    		String selectStatement = "SELECT * FROM appointment WHERE clientID = ? AND hasCompleted = false ORDER BY date DESC LIMIT 1";
            getConnection();

            PreparedStatement prepStmt = con.prepareStatement(selectStatement);
            prepStmt.setInt(1, clientID);

            ResultSet rs = prepStmt.executeQuery();

            if (rs.next()) {
            	hasUncompleted = true;
            } else {
            	hasUncompleted = false;}
            
            prepStmt.close();
            releaseConnection();
            
    	} catch (SQLException e) {
            releaseConnection();
            e.printStackTrace();
        }
    	return hasUncompleted;
    }

    public Boolean checkIfTimeSlotIsTaken(LocalDateTime bookingDateTime) {
    	
    	Boolean isTaken = null;
    	try {
    		String selectStatement = "SELECT * FROM appointment WHERE Date = ?";
            getConnection();

            PreparedStatement prepStmt = con.prepareStatement(selectStatement);
            prepStmt.setTimestamp(1, Timestamp.valueOf(bookingDateTime));

            ResultSet rs = prepStmt.executeQuery();

            if (rs.next()) {
            	isTaken = true;
            } else {
            	isTaken = false;}
            
            prepStmt.close();
            releaseConnection();
            
    	} catch (SQLException e) {
            releaseConnection();
            e.printStackTrace();
        }
    	return isTaken;
    }

    public Booking getBooking(int clientID) {
        Booking booking = null;
        try {
            String selectStatement = "SELECT * FROM appointment WHERE clientID = ? ORDER BY date DESC LIMIT 1";
            getConnection();

            PreparedStatement prepStmt = con.prepareStatement(selectStatement);
            prepStmt.setInt(1, clientID);

            ResultSet rs = prepStmt.executeQuery();

            while (rs.next()) {
                LocalDateTime appointmentDateTime = rs.getTimestamp("date").toLocalDateTime();
                Boolean hasCompleted = rs.getBoolean("hasCompleted");
                Integer id = rs.getInt("id");
                booking = new Booking(id, appointmentDateTime, hasCompleted);

            }

            prepStmt.close();
            releaseConnection();

        } catch (SQLException e) {
            releaseConnection();
            e.printStackTrace();
        }

        return booking;
    }

    public List<Booking> getAllBookings(int clientID) {
        List<Booking> bookings = new ArrayList<>();
        try {
            String selectStatement = "SELECT * FROM appointment WHERE clientID = ?";
            getConnection();

            PreparedStatement prepStmt = con.prepareStatement(selectStatement);
            prepStmt.setInt(1, clientID);
            System.out.println(clientID);

            ResultSet rs = prepStmt.executeQuery();

            while (rs.next()) {
                LocalDateTime appointmentDateTime = rs.getTimestamp("date").toLocalDateTime();
                Integer id = rs.getInt("ID");
                Boolean hasCompleted = rs.getBoolean("hasCompleted");
                Booking booking = new Booking(id, appointmentDateTime, hasCompleted);
                bookings.add(booking);
            }


            prepStmt.close();
            releaseConnection();

        } catch (SQLException e) {
            releaseConnection();
            e.printStackTrace();
        }

        return bookings;
    }

    public void createBooking(int clientID, LocalDateTime appointmentDateTime) {
        try {
            String insertStatement = "INSERT into appointment (clientID, Date, hasCompleted) VALUES (?, ?, ?)";
            getConnection();

            PreparedStatement prepStmt = con.prepareStatement(insertStatement);
            prepStmt.setInt(1, clientID);
            prepStmt.setTimestamp(2, Timestamp.valueOf(appointmentDateTime));
            prepStmt.setBoolean(3, false);

            prepStmt.executeUpdate();

            prepStmt.close();
            releaseConnection();

        } catch (SQLException e) {
            releaseConnection();
            e.printStackTrace();
        }
    }

    public void updateBooking(Booking bookingToUpdate) {
        try {
            String updateStatement = "UPDATE appointment SET date = ?, hasCompleted = ? WHERE ID = ?";
            getConnection();

            PreparedStatement prepStmt = con.prepareStatement(updateStatement);
            prepStmt.setTimestamp(1, Timestamp.valueOf(bookingToUpdate.getAppointmentDateTime()));
            prepStmt.setBoolean(2, bookingToUpdate.getHasCompleted());
            prepStmt.setInt(3, bookingToUpdate.getId());

            prepStmt.executeUpdate();

            prepStmt.close();
            releaseConnection();

        } catch (SQLException e) {
            releaseConnection();
            e.printStackTrace();
        }
    }

    public void deleteBooking(int ID) {
        try {
            String deleteStatement = "DELETE FROM appointment WHERE ID = ?";
            getConnection();

            PreparedStatement prepStmt = con.prepareStatement(deleteStatement);
            prepStmt.setInt(1, ID);

            prepStmt.executeUpdate();

            prepStmt.close();
            releaseConnection();

        } catch (SQLException e) {
            releaseConnection();
            e.printStackTrace();
        }
    }

}
