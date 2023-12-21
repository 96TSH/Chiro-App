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

@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {
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



	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {


		((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD, PUT, POST, DELETE");
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Credentials", "true");
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");

		HttpSession session = request.getSession(false);
		if (session != null) {
			session.invalidate();
			response.setStatus(HttpServletResponse.SC_OK);
		} else {
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
		}

	}
}
