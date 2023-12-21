package dao;

import java.io.IOException;
import java.sql.*;
import javax.sql.*;
import javax.naming.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.*;
import entity.Client;
import entity.Registration;

public class ClientDAO {

	Connection con;
	private boolean conFree = true;

	// Database configuration
	public static String url = "jdbc:mysql://localhost/chirodatabase";
	public static String dbdriver = "com.mysql.jdbc.Driver";
	public static String username = "root";
	public static String password = "root";

	public ClientDAO() throws Exception {
		try {
			Class.forName(dbdriver);
			con = DriverManager.getConnection(url, username, password);

		} catch (Exception ex) {
			System.out.println("Exception in ClientDAO: " + ex);
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

	public String getClientIDByUserName(String clientUser) {
		String userName = null;
		try {
			String selectStatement = "SELECT * " +
					"FROM clientaccount c " +
					"WHERE c.username = ?";
			;
			getConnection();

			PreparedStatement prepStmt = con.prepareStatement(selectStatement);
			prepStmt.setString(1, clientUser);

			ResultSet rs = prepStmt.executeQuery();

			while (rs.next()) {
				userName = rs.getString("id");
			}

			prepStmt.close();
			releaseConnection();

		} catch (SQLException e) {
			releaseConnection();
			e.printStackTrace();
		}
		return userName;
	}


	public Client getClient(String clientUser, String clientPassword) {
		Client client = null;
		Registration registration = null;
		try {
			String selectStatement = "SELECT * " +
					"FROM clientaccount c " +
					"INNER JOIN registration r ON c.registrationID = r.id " +
					"WHERE c.username = ? AND c.password = ?";
			;
			getConnection();

			PreparedStatement prepStmt = con.prepareStatement(selectStatement);
			prepStmt.setString(1, clientUser);
			prepStmt.setString(2, clientPassword);

			ResultSet rs = prepStmt.executeQuery();

			while (rs.next()) {
				Integer id = rs.getInt("id");
				String diagnosis = rs.getString("diagnosis");
				String packageName = rs.getString("packageName");
				Integer numberOfTreatments = rs.getInt("numberOfTreatments");
				String username = rs.getString("username");
				String password = rs.getString("password");
				String stage = rs.getString("stage");
				String name = rs.getString("name");
				int phoneNumber = rs.getInt("phoneNumber");
				String email = rs.getString("email");
				String conditionType = rs.getString("conditionType");
				String source = rs.getString("source");
				String outlet = rs.getString("outlet");
				Boolean hasContacted = rs.getBoolean("hasContacted");
				Boolean hasFirstAppt = rs.getBoolean("hasFirstAppt");

				registration = new Registration(name, phoneNumber, email, conditionType, source, outlet, hasContacted,
						hasFirstAppt);

				client = new Client(id, packageName, diagnosis, numberOfTreatments, username, password, registration, stage);
			}

			prepStmt.close();
			releaseConnection();

		} catch (SQLException e) {
			releaseConnection();
			e.printStackTrace();
		}

		return client;
	}

}
