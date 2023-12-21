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
import entity.Client;
import entity.Registration;

public class RegistrationDAO {

	Connection con;
	private boolean conFree = true;

	// Database configuration
	public static String url = "jdbc:mysql://localhost/chirodatabase";
	public static String dbdriver = "com.mysql.jdbc.Driver";
	public static String username = "root";
	public static String password = "root";

	public RegistrationDAO() throws Exception {
		try {
			Class.forName(dbdriver);
			con = DriverManager.getConnection(url, username, password);

		} catch (Exception ex) {
			System.out.println("Exception in RegistrationDAO: " + ex);
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


    public void createRegistration(Registration registration) {
        try {
            String insertStatement = "INSERT into registration (name, phoneNumber, email, conditionType, source, outlet, hasContacted, hasFirstAppt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            getConnection();

            PreparedStatement prepStmt = con.prepareStatement(insertStatement);

            prepStmt.setString(1, registration.getName());
            prepStmt.setInt(2, registration.getPhoneNumber());
            prepStmt.setString(3, registration.getEmail());
            prepStmt.setString(4, registration.getConditionType());
            prepStmt.setString(5, registration.getSource());
            prepStmt.setString(6, registration.getOutlet());
            prepStmt.setBoolean(7, registration.getHasContacted());
            prepStmt.setBoolean(8, registration.getHasFirstAppt());

            prepStmt.executeUpdate();

            prepStmt.close();
            releaseConnection();

        } catch (SQLException e) {
            releaseConnection();
            e.printStackTrace();
        }
    }

}
