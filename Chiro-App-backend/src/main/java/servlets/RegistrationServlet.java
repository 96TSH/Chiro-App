package servlets;

import com.google.gson.Gson;


import dao.RegistrationDAO;
import entity.Registration;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet("/register")
public class RegistrationServlet extends HttpServlet {
	private RegistrationDAO registrationDAO;
	private Gson gson;
	private static final long serialVersionUID = 1L;

	@Override
	public void init() {
		try {
			registrationDAO = new RegistrationDAO();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		gson = new Gson();
	}



	protected void doPost(HttpServletRequest request,
            HttpServletResponse response) throws IOException {

        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD, PUT, POST, DELETE");
		((HttpServletResponse) response).addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ((HttpServletResponse) response).addHeader("Access-Control-Allow-Credentials", "true");
        response.setContentType("application/json");

        String ParamName = request.getParameter("name");
        Integer ParamPhoneNumber = Integer.parseInt(request.getParameter("phoneNumber"));
        String ParamEmail = request.getParameter("email");
        String ParamConditionType = request.getParameter("conditionType");
        String ParamSource = request.getParameter("source");
        String ParamOutlet = request.getParameter("outlet");

        try {
            Registration registration = new Registration(ParamName, ParamPhoneNumber, ParamEmail, ParamConditionType, ParamSource, ParamOutlet, false ,false);
            registrationDAO.createRegistration(registration);
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().println(gson.toJson("Registration successfully created."));
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            System.out.println(e);
        }
    }
}
