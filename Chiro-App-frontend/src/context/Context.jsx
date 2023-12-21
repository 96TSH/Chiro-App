import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [invalidAppointment, setInvalidAppointment] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [bookingData, setBookingData] = useState([]);

  const fetchBooking = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/simplewebapp/booking`,
        { credentials: "include" }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setBookingData(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const createBooking = async (newDateTime) => {
    try {
      const response = await fetch(
        `http://localhost:8080/simplewebapp/booking?dateTime=${newDateTime}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (response.status === 200) {
        setInvalidAppointment(false);
        setBookingData(data);
        console.log("Appointment successfully created:", data);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      setInvalidAppointment(true);
      setBookingData("Timeslot is already taken.");
    }
  };

  const updateBooking = async (updatedDateTime) => {
    try {
      const response = await fetch(
        `http://localhost:8080/simplewebapp/booking?dateTime=${updatedDateTime}`,
        { method: "PUT", credentials: "include" }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      // console.log(response.status)

      if (response.status === 200) {
        setInvalidAppointment(false);
        setBookingData(data);
        console.log("Appointment successfully updated:", data);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      setInvalidAppointment(true);
      setBookingData("Timeslot is already taken.");
    }
  };

  const deleteBooking = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/simplewebapp/booking`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      console.log("Appointment deleted successfully");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/simplewebapp/logout`,
        { credentials: "include" }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      console.log("Logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profileData,
        setProfileData,
        bookingData,
        setBookingData,
        fetchBooking,
        updateBooking,
        createBooking,
        deleteBooking,
        logout,
        invalidAppointment,
        setInvalidAppointment,
      }}
    >
      {children}
    </Context.Provider>
  );
}
