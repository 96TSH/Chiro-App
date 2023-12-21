package servlets;

import com.google.gson.Gson;

import dao.BookingDAO;
import dao.ClientDAO;
import entity.Booking;
import entity.Client;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/client")
public class ClientServlet extends HttpServlet {
	private ClientDAO clientDAO;
	private Gson gson;
	private static final long serialVersionUID = 1L;

	@Override
	public void init() {
		try {
			clientDAO = new ClientDAO();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		gson = new Gson();
	}

	// private void getAllClients(HttpServletRequest request, HttpServletResponse
	// response) throws ServletException {
	//
	//
	// ((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin",
	// "*");
	// ((HttpServletResponse)
	// response).addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT,
	// POST");
	//
	// List<Client> bookings = clientDAO.getAllClients();
	// String bookingJsonString = gson.toJson(bookings);
	// System.out.println(bookingJsonString + "get all");
	//
	// response.setContentType("application/json");
	// try {
	// response.getWriter().println(bookingJsonString);
	// } catch (IOException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	//
	//
	//
	// }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

		((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD, PUT, POST, DELETE");
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    	((HttpServletResponse) response).addHeader("Access-Control-Allow-Credentials", "true");

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");

		String clientUser = request.getParameter("user");
		String clientPassword = request.getParameter("password");

		if (clientUser == null || clientUser.isEmpty()) {
			System.out.println("username is null/empty");
			response.getWriter().println(gson.toJson("Username cannot be empty."));
			return;
		} else if (clientPassword == null || clientPassword.isEmpty()) {
			System.out.println("password is null/empty");
			response.getWriter().println(gson.toJson("Password cannot be empty."));
			return;
		}

		try {
			Client profile = clientDAO.getClient(clientUser, clientPassword);

			if (profile != null) {
				String userID = clientDAO.getClientIDByUserName(clientUser);
				
				HttpSession session = request.getSession(true);
				session.setMaxInactiveInterval(60*60);
				session.setAttribute("userID",userID);
				String bookingJsonString = gson.toJson(profile);
				response.getWriter().println(bookingJsonString);
			} else {
				response.setStatus(HttpServletResponse.SC_NOT_FOUND);
				response.getWriter().println(gson.toJson("Invalid Username/Password."));
			}

		} catch (Exception e) {
			System.out.println(e);
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.getWriter().println(gson.toJson("Internal server error"));
		}
	}
}
