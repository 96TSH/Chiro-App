package servlets;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import dao.BookingDAO;
import dao.ClientDAO;
import entity.Booking;
import entity.Client;
import gson.LocalDateTimeAdapter;
import services.BookingService;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@WebServlet("/booking")
public class BookingServlet extends HttpServlet {
    private BookingService bookingService;
    private BookingDAO bookingDAO;
    private Gson gson;
    private static final long serialVersionUID = 1L;

    @Override
    public void init() {
        try {
            bookingDAO = new BookingDAO();
            bookingService = new BookingService(bookingDAO);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        gson = new GsonBuilder()
                .registerTypeAdapter(LocalDateTime.class, new LocalDateTimeAdapter())
                .create();
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD, PUT, POST, DELETE");
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Credentials", "true");
        response.setContentType("application/json");

        Integer clientID = null;

        try {
            HttpSession session = request.getSession(false);
            if (session == null){ throw new Exception("Please log in.");}
            clientID = Integer.parseInt((String) session.getAttribute("userID"));

            List<Booking> bookingList = bookingService.getAllBookings(clientID);
            if (bookingList == null){ throw new Exception("no bookings found.");}
            String bookingListJsonString = gson.toJson(bookingList);
            response.getWriter().println(bookingListJsonString);
            System.out.println(bookingService.checkIfUncompletedBookingExist(clientID));
            
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            response.getWriter().println(e);
        }
    }

    protected void doPost(HttpServletRequest request,
            HttpServletResponse response) throws IOException {

        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD, PUT, POST, DELETE");
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Credentials", "true");
        response.setContentType("application/json");

        Integer clientID = null;
        String ParamDateTime = request.getParameter("dateTime");

        try {
            HttpSession session = request.getSession(false);
            if (session == null){ throw new Exception("Please log in.");}
            clientID = Integer.parseInt((String) session.getAttribute("userID"));

            LocalDateTime bookingDateTime = LocalDateTime.parse(ParamDateTime);
            bookingService.createBooking(clientID, bookingDateTime);
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().println(gson.toJson("Appointment successfully created."));
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            System.out.println(e);
        }
    }

    protected void doPut(HttpServletRequest request,
            HttpServletResponse response) throws IOException {

        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD, PUT, POST, DELETE");
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Credentials", "true");
        response.setContentType("application/json");

        Integer clientID = null;
        String ParamDateTime = request.getParameter("dateTime");

        try {
              HttpSession session = request.getSession(false);
            if (session == null){ throw new Exception("Please log in.");}
            clientID = Integer.parseInt((String) session.getAttribute("userID"));

            LocalDateTime appointmentDateTime = LocalDateTime.parse(ParamDateTime);
            bookingService.updateBooking(clientID, appointmentDateTime);
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().println(gson.toJson("Appointment successfully updated."));
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            response.getWriter().println(e);
        }
    }

    protected void doDelete(HttpServletRequest request,
            HttpServletResponse response) throws IOException {

        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD, PUT, POST, DELETE");
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Credentials", "true");
        response.setContentType("application/json");

        Integer clientID = null;


        try {
            HttpSession session = request.getSession(false);
            if (session == null){ throw new Exception("Please log in.");}
            clientID = Integer.parseInt((String) session.getAttribute("userID"));

            bookingService.deleteBooking(clientID);
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().println(gson.toJson("Appointment successfully deleted."));
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            response.getWriter().println(e);
        }
    }

}